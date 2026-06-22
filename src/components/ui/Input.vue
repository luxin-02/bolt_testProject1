<template>
  <div class="w-full">
    <label v-if="label" class="block text-sm font-medium text-text-primary mb-2">
      {{ label }}
      <span v-if="required" class="text-error-500">*</span>
    </label>

    <div class="relative">
      <span v-if="iconLeft" class="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none">
        <slot name="icon-left" />
      </span>

      <input
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :readonly="readonly"
        :class="[
          'w-full px-4 py-2 text-base font-normal border rounded-lg transition-all duration-200',
          'bg-bg-primary text-text-primary placeholder-text-tertiary',
          'border-border-light focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100',
          'disabled:bg-bg-secondary disabled:text-text-disabled disabled:border-border-light disabled:cursor-not-allowed',
          error ? 'border-error-500 focus:border-error-500 focus:ring-error-100' : '',
          iconLeft ? 'pl-10' : '',
          iconRight ? 'pr-10' : '',
        ]"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="$emit('blur')"
        @focus="$emit('focus')"
      />

      <span v-if="iconRight" class="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none">
        <slot name="icon-right" />
      </span>
    </div>

    <p v-if="error" class="mt-1 text-sm text-error-500">{{ error }}</p>
    <p v-else-if="hint" class="mt-1 text-sm text-text-tertiary">{{ hint }}</p>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    modelValue: [String, Number],
    type: { type: String, default: 'text' },
    label: String,
    placeholder: String,
    hint: String,
    error: String,
    disabled: Boolean,
    required: Boolean,
    readonly: Boolean,
    iconLeft: Boolean,
    iconRight: Boolean,
  },
  emits: ['update:modelValue', 'blur', 'focus'],
}
</script>
