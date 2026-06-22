import { computed } from 'vue'
import store from '@/store'

export function useAuth() {
  const token = computed(() => store.state.auth.token)
  const isAuthenticated = computed(() => !!token.value)

  async function login(email, password) {
    await store.dispatch('auth/login', { email, password })
    await store.dispatch('user/fetchProfile')
    window.location.href = '/app/dashboard'
  }

  async function logout() {
    await store.dispatch('auth/logout')
    store.dispatch('user/logout')
    window.location.href = '/auth/login'
  }

  return { token, isAuthenticated, login, logout }
}
