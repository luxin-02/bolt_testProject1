<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
      sizeClasses,
      variantClasses,
    ]"
  >
    <span v-if="loading" class="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button',
      validator: (v) => ['button', 'submit', 'reset'].includes(v),
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (v) => ['primary', 'secondary', 'tertiary', 'ghost', 'danger', 'success'].includes(v),
    },
    size: {
      type: String,
      default: 'md',
      validator: (v) => ['sm', 'md', 'lg'].includes(v),
    },
    disabled: Boolean,
    loading: Boolean,
  },
  computed: {
    sizeClasses() {
      const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      }
      return sizes[this.size]
    },
    variantClasses() {
      const variants = {
        primary:
          'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus-visible:outline-primary-600',
        secondary:
          'bg-secondary-200 text-secondary-900 hover:bg-secondary-300 active:bg-secondary-400 focus-visible:outline-secondary-600',
        tertiary:
          'bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50 active:bg-primary-100 focus-visible:outline-primary-600',
        ghost: 'bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus-visible:outline-primary-600',
        danger: 'bg-error-600 text-white hover:bg-error-700 active:bg-error-800 focus-visible:outline-error-600',
        success:
          'bg-success-600 text-white hover:bg-success-700 active:bg-success-800 focus-visible:outline-success-600',
      }
      return variants[this.variant]
    },
  },
}
</script>
