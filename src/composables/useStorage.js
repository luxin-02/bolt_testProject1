import { ref, watch } from 'vue'

export function useStorage(key, defaultValue = null) {
  const storedValue = localStorage.getItem(key)
  const data = ref(storedValue ? JSON.parse(storedValue) : defaultValue)

  watch(
    data,
    (newValue) => {
      if (newValue === null || newValue === undefined) {
        localStorage.removeItem(key)
      } else {
        localStorage.setItem(key, JSON.stringify(newValue))
      }
    },
    { deep: true }
  )

  function remove() {
    data.value = defaultValue
    localStorage.removeItem(key)
  }

  return {
    data,
    remove,
  }
}
