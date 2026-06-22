<template>
  <header class="h-16 bg-bg-surface border-b border-border-base flex items-center px-4 fixed top-0 left-0 right-0 z-50">
    <button @click="toggleSidebar" class="lg:hidden p-2">Menu</button>
    <div class="flex-1" />
    <button @click="toggleDarkMode" class="p-2">{{ isDarkMode ? 'Light' : 'Dark' }}</button>
  </header>
</template>

<script>
export default {
  name: 'TheNavbar',
  computed: {
    isDarkMode() {
      return this.$store.getters['app/isDarkMode']
    },
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit('app/SET_THEME', this.isDarkMode ? 'light' : 'dark')
    },
    toggleSidebar() {
      this.$store.dispatch('app/toggleSidebar')
    },
  },
}
</script>
