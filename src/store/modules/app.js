const state = {
  theme: localStorage.getItem('theme') || 'light',
  sidebarCollapsed: false,
  pageLoading: false,
}

const getters = {
  isDarkMode: (state) => state.theme === 'dark',
}

const mutations = {
  SET_THEME(state, theme) {
    state.theme = theme
    localStorage.setItem('theme', theme)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },
  SET_SIDEBAR_COLLAPSED(state, collapsed) {
    state.sidebarCollapsed = collapsed
  },
  SET_PAGE_LOADING(state, loading) {
    state.pageLoading = loading
  },
}

const actions = {
  toggleTheme({ state, commit }) {
    commit('SET_THEME', state.theme === 'dark' ? 'light' : 'dark')
  },
  toggleSidebar({ state, commit }) {
    commit('SET_SIDEBAR_COLLAPSED', !state.sidebarCollapsed)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
