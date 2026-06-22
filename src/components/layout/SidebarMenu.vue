<template>
  <nav class="p-4">
    <template v-for="route in routes" :key="route.path">
      <SidebarMenuItem v-if="route.meta" :item="route" :collapsed="collapsed" />
    </template>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import SidebarMenuItem from './SidebarMenuItem.vue'

const props = defineProps({ collapsed: Boolean })
const store = useStore()
const routes = computed(() => store.state.permission.routes)
</script>
