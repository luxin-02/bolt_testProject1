<template>
  <div>
    <aside :class="['bg-bg-surface border-r border-border-base w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] z-40 transition-transform', collapsed ? '-translate-x-full lg:translate-x-0' : '']">
      <nav class="p-4">
        <router-link to="/app/dashboard" class="block px-3 py-2 rounded hover:bg-bg-elevated">Dashboard</router-link>
      </nav>
    </aside>
    <div v-if="!collapsed" class="fixed inset-0 bg-black/50 z-30 lg:hidden" @click="toggle" />
  </div>
</template>

<script>
export default {
  name: 'TheSidebar',
  computed: {
    collapsed() {
      return this.$store.state.app.sidebarCollapsed
    },
  },
  methods: {
    toggle() {
      this.$store.dispatch('app/toggleSidebar')
    },
  },
}
</script>
