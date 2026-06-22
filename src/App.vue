<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  mounted() {
    const savedTheme = this.$store.state.app.theme
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  },
  watch: {
    '$store.state.app.pageLoading'(loading) {
      const el = document.querySelector('#app')
      if (loading) {
        el?.classList.add('loading')
      } else {
        el?.classList.remove('loading')
      }
    },
  },
}
</script>
