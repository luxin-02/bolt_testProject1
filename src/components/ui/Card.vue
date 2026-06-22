<template>
  <div
    :class="[
      'rounded-lg border transition-all duration-200',
      'bg-bg-primary border-border-light',
      hoverable ? 'hover:shadow-lg hover:border-border-base cursor-pointer' : 'shadow-base',
      padding ? `p-${padding}` : 'p-6',
    ]"
  >
    <div v-if="$slots.header" class="border-b border-border-light pb-4 mb-4">
      <slot name="header" />
    </div>

    <div>
      <slot />
    </div>

    <div v-if="$slots.footer" class="border-t border-border-light pt-4 mt-4">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    hoverable: Boolean,
    padding: {
      type: [String, Number],
      default: 6,
    },
  },
}
</script>
