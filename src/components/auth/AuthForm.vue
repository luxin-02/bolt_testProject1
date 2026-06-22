<template>
  <ui-card class="w-full max-w-md mx-auto">
    <!-- Header -->
    <template #header>
      <div class="text-center">
        <h1 class="text-2xl font-bold text-text-primary">{{ title }}</h1>
        <p v-if="subtitle" class="text-text-secondary text-sm mt-1">{{ subtitle }}</p>
      </div>
    </template>

    <!-- Alert -->
    <div
      v-if="alertMessage"
      class="mb-4 px-4 py-3 rounded-lg text-sm"
      :class="alertType === 'error' ? 'bg-error-50 text-error-700 border border-error-200' : 'bg-success-50 text-success-700 border border-success-200'"
    >
      {{ alertMessage }}
    </div>

    <!-- Form body -->
    <slot />

    <!-- Footer -->
    <template #footer>
      <div class="text-center">
        <slot name="footer" />
      </div>
    </template>
  </ui-card>
</template>

<script>
export default {
  name: 'AuthForm',
  props: {
    title: { type: String, required: true },
    subtitle: String,
    alertMessage: String,
    alertType: {
      type: String,
      default: 'error',
      validator: (v) => ['error', 'success'].includes(v),
    },
  },
}
</script>
