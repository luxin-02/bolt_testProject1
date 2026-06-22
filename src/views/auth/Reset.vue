<template>
  <auth-form
    title="Set new password"
    subtitle="Enter your new password below"
    :alert-message="alertMsg"
    :alert-type="alertType"
  >
    <form @submit.prevent="handleReset" class="space-y-4">
      <ui-input
        v-model="form.password"
        type="password"
        label="New Password"
        placeholder="At least 6 characters"
        :error="passwordError"
        required
        :disabled="loading"
      />

      <ui-input
        v-model="form.confirmPassword"
        type="password"
        label="Confirm New Password"
        placeholder="Re-enter your password"
        :error="confirmError"
        required
        :disabled="loading"
      />

      <ui-button type="submit" variant="primary" size="lg" class="w-full" :loading="loading">
        Reset Password
      </ui-button>
    </form>

    <template #footer>
      <router-link to="/auth/login" class="text-sm text-primary-600 hover:text-primary-700 font-medium">
        Back to sign in
      </router-link>
    </template>
  </auth-form>
</template>

<script>
import supabase from '@/utils/supabase'

export default {
  name: 'ResetPassword',
  data() {
    return {
      form: { password: '', confirmPassword: '' },
      alertMsg: '',
      alertType: 'error',
      loading: false,
    }
  },
  computed: {
    passwordError() {
      if (!this.form.password) return ''
      return this.form.password.length < 6 ? 'Password must be at least 6 characters' : ''
    },
    confirmError() {
      if (!this.form.confirmPassword) return ''
      return this.form.password !== this.form.confirmPassword ? 'Passwords do not match' : ''
    },
  },
  methods: {
    async handleReset() {
      this.alertMsg = ''
      if (this.passwordError || this.confirmError) return
      if (!supabase) {
        this.alertMsg = 'Supabase is not configured'
        return
      }

      this.loading = true
      try {
        const { error } = await supabase.auth.updateUser({ password: this.form.password })
        if (error) throw error
        this.alertType = 'success'
        this.alertMsg = 'Password updated successfully'
        setTimeout(() => this.$router.push('/auth/login'), 2000)
      } catch (e) {
        this.alertType = 'error'
        this.alertMsg = e.message || 'Failed to reset password'
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
