<template>
  <div class="w-full">
    <label v-if="label" class="block text-sm font-medium text-text-primary mb-2">
      {{ label }}
      <span v-if="required" class="text-error-500">*</span>
    </label>

    <select
      :value="modelValue"
      :disabled="disabled"
      :required="required"
      :multiple="multiple"
      :class="[
        'w-full px-4 py-2 text-base font-normal border rounded-lg transition-all duration-200',
        'bg-bg-primary text-text-primary',
        'border-border-light focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100',
        'disabled:bg-bg-secondary disabled:text-text-disabled disabled:border-border-light disabled:cursor-not-allowed',
        'appearance-none cursor-pointer',
        error ? 'border-error-500 focus:border-error-500 focus:ring-error-100' : '',
        'bg-[url(\'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20fill=%22none%22%20viewBox=%220%200%2020%2020%22%3E%3Cpath%20stroke=%22%23475569%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%20d=%22M6%208l4%204%204-4%22/%3E%3C/svg%3E\')] bg-no-repeat bg-right bg-origin-padding pr-10',
      ]"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option v-if="placeholder" value="">{{ placeholder }}</option>
      <option v-for="opt in options" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
    </select>

    <p v-if="error" class="mt-1 text-sm text-error-500">{{ error }}</p>
    <p v-else-if="hint" class="mt-1 text-sm text-text-tertiary">{{ hint }}</p>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    modelValue: [String, Number, Array],
    options: { type: Array, required: true },
    label: String,
    placeholder: String,
    hint: String,
    error: String,
    disabled: Boolean,
    required: Boolean,
    multiple: Boolean,
  },
  emits: ['update:modelValue'],
}
</script>
