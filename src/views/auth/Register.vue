<template>
  <auth-form
    title="Create account"
    subtitle="Get started with a free account"
    :alert-message="alertMsg"
    :alert-type="alertType"
  >
    <form @submit.prevent="handleRegister" class="space-y-4">
      <ui-input
        v-model="form.name"
        type="text"
        label="Full Name"
        placeholder="John Doe"
        required
        :disabled="loading"
      />

      <ui-input
        v-model="form.email"
        type="email"
        label="Email Address"
        placeholder="you@example.com"
        required
        :disabled="loading"
      />

      <ui-input
        v-model="form.password"
        type="password"
        label="Password"
        placeholder="At least 6 characters"
        :error="passwordError"
        required
        :disabled="loading"
      />

      <ui-input
        v-model="form.confirmPassword"
        type="password"
        label="Confirm Password"
        placeholder="Re-enter your password"
        :error="confirmError"
        required
        :disabled="loading"
      />

      <label class="flex items-start gap-2 cursor-pointer select-none">
        <input v-model="form.agreeTerms" type="checkbox" class="w-4 h-4 mt-0.5 rounded border-border-base text-primary-600 focus:ring-primary-500" />
        <span class="text-sm text-text-secondary">
          I agree to the
          <a href="#" class="text-primary-600 hover:text-primary-700">Terms of Service</a>
          and
          <a href="#" class="text-primary-600 hover:text-primary-700">Privacy Policy</a>
        </span>
      </label>

      <ui-button type="submit" variant="primary" size="lg" class="w-full" :loading="loading" :disabled="!form.agreeTerms">
        Create Account
      </ui-button>
    </form>

    <divider-with-text text="or sign up with" />

    <social-buttons @google="handleGoogle" @github="handleGithub" />

    <template #footer>
      <p class="text-text-secondary text-sm">
        Already have an account?
        <router-link to="/auth/login" class="text-primary-600 hover:text-primary-700 font-medium">
          Sign in
        </router-link>
      </p>
    </template>
  </auth-form>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false,
      },
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
    hasErrors() {
      return this.passwordError || this.confirmError
    },
  },
  methods: {
    async handleRegister() {
      this.alertMsg = ''
      if (this.hasErrors) return
      if (!this.form.agreeTerms) {
        this.alertMsg = 'Please accept the Terms of Service'
        return
      }

      this.loading = true
      try {
        const result = await this.$store.dispatch('auth/register', {
          email: this.form.email,
          password: this.form.password,
        })

        if (result.user && !result.session) {
          this.alertType = 'success'
          this.alertMsg = 'Check your email to confirm your account'
        } else {
          this.$router.push('/app/dashboard')
        }
      } catch (e) {
        this.alertType = 'error'
        this.alertMsg = e.message || 'Registration failed'
      } finally {
        this.loading = false
      }
    },

    handleGoogle() {
      this.alertType = 'error'
      this.alertMsg = 'Google sign-up requires Supabase OAuth configuration'
    },

    handleGithub() {
      this.alertType = 'error'
      this.alertMsg = 'GitHub sign-up requires Supabase OAuth configuration'
    },
  },
}
</script>
