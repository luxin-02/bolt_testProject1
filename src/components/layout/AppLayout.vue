<template>
  <div class="min-h-screen bg-bg-base flex flex-col">
    <TheNavbar />
    <div class="flex flex-1 overflow-hidden pt-16">
      <TheSidebar />
      <main class="flex-1 overflow-y-auto p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar.vue'
import TheSidebar from './TheSidebar.vue'

export default {
  name: 'AppLayout',
  components: { TheNavbar, TheSidebar },
}
</script>
