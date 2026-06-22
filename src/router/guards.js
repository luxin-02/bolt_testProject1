import router from './index'
import store from '@/store'
import { getToken } from '@/utils/auth'

const whiteList = ['/auth/login', '/auth/register', '/auth/reset', '/403']

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken()

  document.title = to.meta?.title ? `${to.meta.title} - App` : 'App'

  if (hasToken) {
    if (to.path.startsWith('/auth')) {
      next('/dashboard')
    } else {
      const hasRoutes = store.state.permission.routes.length > 0
      if (hasRoutes) {
        next()
      } else {
        try {
          const roles = store.state.user.profile?.roles || []
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          accessRoutes.forEach((route) => router.addRoute(route))
          next({ ...to, replace: true })
        } catch (error) {
          await store.dispatch('auth/logout')
          next(`/auth/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(`/auth/login?redirect=${to.path}`)
    }
  }
})
