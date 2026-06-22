<template>
  <div class="relative flex items-center my-6">
    <div class="flex-1 border-t border-border-light" />
    <span class="px-4 text-sm text-text-tertiary bg-bg-primary">{{ text }}</span>
    <div class="flex-1 border-t border-border-light" />
  </div>
</template>

<script>
export default {
  name: 'DividerWithText',
  props: {
    text: { type: String, default: 'or' },
  },
}
</script>
