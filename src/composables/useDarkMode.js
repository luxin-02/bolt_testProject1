import { computed } from 'vue'
import store from '@/store'

export function useDarkMode() {
  const isDarkMode = computed(() => store.getters['app/isDarkMode'])
  const toggleDarkMode = () => store.commit('app/SET_THEME', isDarkMode.value ? 'light' : 'dark')
  return { isDarkMode, toggleDarkMode }
}
