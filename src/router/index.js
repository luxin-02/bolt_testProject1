import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/auth/login',
  },
  {
    path: '/auth',
    component: () => import('@/components/layout/AuthLayout.vue'),
    redirect: '/auth/login',
    children: [
      { path: 'login', name: 'Login', component: () => import('@/views/auth/Login.vue') },
      { path: 'register', name: 'Register', component: () => import('@/views/auth/Register.vue') },
      { path: 'forgot', name: 'ForgotPassword', component: () => import('@/views/auth/Forgot.vue') },
      { path: 'reset', name: 'ResetPassword', component: () => import('@/views/auth/Reset.vue') },
    ],
  },
  {
    path: '/app',
    component: () => import('@/components/layout/AppLayout.vue'),
    redirect: '/app/dashboard',
    children: [
      { path: 'dashboard', name: 'Dashboard', component: () => import('@/views/dashboard/Index.vue'), meta: { title: 'Dashboard' } },
      { path: 'users', name: 'Users', component: () => import('@/views/users/Index.vue'), meta: { title: 'Users' } },
    ],
  },
  {
    path: '/403',
    name: 'Forbidden',
    component: () => import('@/views/error/403.vue'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('@/views/error/404.vue'),
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes,
})

const whiteList = ['/auth/login', '/auth/register', '/auth/forgot', '/auth/reset', '/403']

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('auth_token')
  document.title = to.meta?.title ? `${to.meta.title} - App` : 'App'

  if (token) {
    if (to.path.startsWith('/auth')) {
      next('/app/dashboard')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(`/auth/login?redirect=${to.path}`)
    }
  }
})

export default router
