export default {
  inserted(el, binding) {
    if (binding.value) {
      el.style.position = 'relative'
      el.style.opacity = '0.5'
      el.style.pointerEvents = 'none'
    }
  },
  update(el, binding) {
    el.style.opacity = binding.value ? '0.5' : '1'
    el.style.pointerEvents = binding.value ? 'none' : ''
  },
}
