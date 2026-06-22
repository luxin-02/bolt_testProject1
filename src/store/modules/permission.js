export const asyncRoutes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/Index.vue'),
    meta: { title: 'Dashboard' },
  },
]

const state = {
  routes: [],
  permissions: [],
}

const mutations = {
  SET_ROUTES(state, routes) {
    state.routes = routes
  },
  SET_PERMISSIONS(state, permissions) {
    state.permissions = permissions
  },
}

const actions = {
  generateRoutes({ commit }) {
    commit('SET_ROUTES', asyncRoutes)
    commit('SET_PERMISSIONS', ['view'])
    return asyncRoutes
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
