<template>
  <auth-form
    title="Reset password"
    subtitle="Enter your email and we'll send you a reset link"
    :alert-message="alertMsg"
    :alert-type="alertType"
  >
    <template v-if="!sent">
      <form @submit.prevent="handleReset" class="space-y-4">
        <ui-input
          v-model="form.email"
          type="email"
          label="Email Address"
          placeholder="you@example.com"
          required
          :disabled="loading"
        />

        <ui-button type="submit" variant="primary" size="lg" class="w-full" :loading="loading">
          Send Reset Link
        </ui-button>
      </form>
    </template>

    <template v-else>
      <div class="text-center py-4">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-success-100 flex items-center justify-center">
          <svg class="w-8 h-8 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <p class="text-text-primary font-medium">Check your inbox</p>
        <p class="text-text-secondary text-sm mt-1">
          We've sent a password reset link to <strong>{{ form.email }}</strong>
        </p>
      </div>
    </template>

    <template #footer>
      <router-link to="/auth/login" class="text-sm text-primary-600 hover:text-primary-700 font-medium">
        Back to sign in
      </router-link>
    </template>
  </auth-form>
</template>

<script>
export default {
  name: 'ForgotPassword',
  data() {
    return {
      form: { email: '' },
      alertMsg: '',
      alertType: 'error',
      loading: false,
      sent: false,
    }
  },
  methods: {
    async handleReset() {
      this.alertMsg = ''
      if (!this.form.email) {
        this.alertMsg = 'Please enter your email'
        return
      }

      this.loading = true
      try {
        await this.$store.dispatch('auth/resetPassword', { email: this.form.email })
        this.sent = true
      } catch (e) {
        this.alertType = 'error'
        this.alertMsg = e.message || 'Failed to send reset email'
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
