import supabase from '@/utils/supabase'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken(),
  loading: false,
}

const getters = {
  isAuthenticated: (state) => !!state.token,
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
    setToken(token)
  },
  SET_LOADING(state, loading) {
    state.loading = loading
  },
  LOGOUT(state) {
    state.token = ''
    removeToken()
  },
}

function localLogin(commit, email) {
  const token = 'local_' + btoa(email || 'guest') + '_' + Date.now()
  commit('SET_TOKEN', token)
  return { user: { email } }
}

const actions = {
  async login({ commit }, { email, password }) {
    commit('SET_LOADING', true)
    try {
      if (!supabase) return localLogin(commit, email)
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      commit('SET_TOKEN', data.session.access_token)
      return data
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async register({ commit }, { email, password }) {
    commit('SET_LOADING', true)
    try {
      if (!supabase) return localLogin(commit, email)
      const { data, error } = await supabase.auth.signUp({ email, password })
      if (error) throw error
      if (data.session) commit('SET_TOKEN', data.session.access_token)
      return data
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async resetPassword(_, { email }) {
    if (!supabase) return
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/#/auth/reset`,
    })
    if (error) throw error
  },

  async guestLogin({ commit }) {
    commit('SET_LOADING', true)
    try {
      if (!supabase) return localLogin(commit, 'guest@local')
      const guestEmail = `guest_${Date.now()}@guest.local`
      const guestPassword = 'Guest_' + Math.random().toString(36).slice(2, 10)
      const { data, error } = await supabase.auth.signUp({ email: guestEmail, password: guestPassword })
      if (error) throw error
      if (data.session) commit('SET_TOKEN', data.session.access_token)
      return data
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async logout({ commit }) {
    if (supabase) { try { await supabase.auth.signOut() } catch (e) { /* ignore */ } }
    commit('LOGOUT')
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
