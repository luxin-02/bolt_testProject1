<template>
  <auth-form
    title="Welcome back"
    subtitle="Sign in to your account to continue"
    :alert-message="errorMsg"
    alert-type="error"
  >
    <form @submit.prevent="handleLogin" class="space-y-4">
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
        placeholder="Enter your password"
        required
        :disabled="loading"
      />

      <div class="flex items-center justify-between">
        <label class="flex items-center gap-2 cursor-pointer select-none">
          <input v-model="form.remember" type="checkbox" class="w-4 h-4 rounded border-border-base text-primary-600 focus:ring-primary-500" />
          <span class="text-sm text-text-secondary">Remember me</span>
        </label>
        <router-link to="/auth/forgot" class="text-sm text-primary-600 hover:text-primary-700 font-medium">
          Forgot password?
        </router-link>
      </div>

      <ui-button type="submit" variant="primary" size="lg" class="w-full" :loading="loading">
        Sign In
      </ui-button>
    </form>

    <divider-with-text text="or continue with" />

    <social-buttons @google="handleGoogle" @github="handleGithub" />

    <divider-with-text text="or" />

    <!-- Quick Demo Account -->
    <div class="border border-border-light rounded-lg p-4 bg-bg-secondary">
      <p class="text-sm font-medium text-text-primary mb-3">Quick Login with Demo Account</p>
      <div class="space-y-2">
        <ui-button
          variant="tertiary"
          size="sm"
          class="w-full justify-start"
          :loading="demoLoading === 'admin'"
          @click="handleDemoLogin('admin')"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A10.97 10.97 0 0112 21.948a10.97 10.97 0 01-8.618-4.016M12 2a10.97 10.97 0 018.618 4.016" />
          </svg>
          Admin - admin@demo.com
        </ui-button>
        <ui-button
          variant="tertiary"
          size="sm"
          class="w-full justify-start"
          :loading="demoLoading === 'user'"
          @click="handleDemoLogin('user')"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          User - user@demo.com
        </ui-button>
      </div>
      <p class="text-xs text-text-tertiary mt-2">Password: demo1234</p>
    </div>

    <divider-with-text text="or" />

    <!-- Guest Login -->
    <ui-button variant="tertiary" size="lg" class="w-full" :loading="guestLoading" @click="handleGuestLogin">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
      Continue as Guest
    </ui-button>

    <template #footer>
      <p class="text-text-secondary text-sm">
        Don't have an account?
        <router-link to="/auth/register" class="text-primary-600 hover:text-primary-700 font-medium">
          Create one
        </router-link>
      </p>
    </template>
  </auth-form>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember: false,
      },
      errorMsg: '',
      loading: false,
      guestLoading: false,
      demoLoading: '',
    }
  },
  methods: {
    async handleLogin() {
      this.errorMsg = ''
      if (!this.form.email || !this.form.password) {
        this.errorMsg = 'Please fill in all fields'
        return
      }
      this.loading = true
      try {
        await this.$store.dispatch('auth/login', {
          email: this.form.email,
          password: this.form.password,
        })
        const redirect = this.$route.query.redirect || '/app/dashboard'
        this.$router.push(redirect)
      } catch (e) {
        this.errorMsg = e.message || 'Invalid email or password'
      } finally {
        this.loading = false
      }
    },

    async handleGuestLogin() {
      this.errorMsg = ''
      this.guestLoading = true
      try {
        await this.$store.dispatch('auth/guestLogin')
        this.$router.push('/app/dashboard')
      } catch (e) {
        this.errorMsg = e.message || 'Failed to create guest account'
      } finally {
        this.guestLoading = false
      }
    },

    handleGoogle() {
      this.errorMsg = 'Google login requires Supabase OAuth configuration'
    },

    handleGithub() {
      this.errorMsg = 'GitHub login requires Supabase OAuth configuration'
    },

    async handleDemoLogin(role) {
      this.errorMsg = ''
      this.demoLoading = role
      const accounts = {
        admin: { email: 'admin@demo.com', password: 'demo1234' },
        user: { email: 'user@demo.com', password: 'demo1234' },
      }
      try {
        await this.$store.dispatch('auth/login', accounts[role])
        const redirect = this.$route.query.redirect || '/app/dashboard'
        this.$router.push(redirect)
      } catch (e) {
        this.errorMsg = e.message || 'Demo login failed'
      } finally {
        this.demoLoading = ''
      }
    },
  },
}
</script>
