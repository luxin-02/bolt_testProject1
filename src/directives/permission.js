import store from '@/store'

export default {
  inserted(el, binding) {
    const perms = store.state.permission.permissions
    const val = binding.value
    const has = perms.includes('*') || (Array.isArray(val) ? val.some(p => perms.includes(p)) : perms.includes(val))
    if (!has) {
      el.parentNode?.removeChild(el)
    }
  },
}
