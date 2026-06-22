<template>
  <router-link
    :to="item.path"
    class="flex items-center gap-3 px-3 py-2 rounded-md text-text-secondary hover:bg-bg-elevated hover:text-text-primary transition-colors duration-fast"
    active-class="bg-bg-elevated text-primary-600"
  >
    <span class="w-5 h-5 flex items-center justify-center">
      <svg v-if="item.meta?.icon === 'dashboard'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
      <svg v-else-if="item.meta?.icon === 'users'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
      </svg>
    </span>
    <span v-if="!collapsed" class="text-sm font-medium">{{ item.meta?.title }}</span>
  </router-link>
</template>

<script setup>
defineProps({ item: Object, collapsed: Boolean })
</script>
