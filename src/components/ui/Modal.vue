<template>
  <teleport to="body">
    <transition name="modal">
      <div v-if="visible" class="fixed inset-0 z-modal flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div
          class="fixed inset-0 bg-black/50 transition-opacity duration-200"
          @click="closeOnBackdrop"
        />

        <!-- Modal -->
        <div
          class="relative bg-bg-primary rounded-xl shadow-2xl max-w-md w-full mx-auto z-modal animate-in fade-in scale-95"
        >
          <!-- Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-border-light">
            <h2 class="text-xl font-semibold text-text-primary">
              <slot name="header">{{ title }}</slot>
            </h2>
            <button
              @click="close"
              class="text-text-tertiary hover:text-text-primary transition-colors p-1"
              aria-label="Close"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Content -->
          <div class="px-6 py-4 max-h-[60vh] overflow-y-auto">
            <slot />
          </div>

          <!-- Footer -->
          <div v-if="$slots.footer" class="flex items-center gap-3 px-6 py-4 border-t border-border-light">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    visible: { type: Boolean, default: false },
    title: String,
    closeOnBackdrop: { type: Boolean, default: true },
  },
  emits: ['update:visible', 'close'],
  methods: {
    close() {
      this.$emit('update:visible', false)
      this.$emit('close')
    },
  },
  watch: {
    visible(val) {
      if (val) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
  },
  beforeUnmount() {
    document.body.style.overflow = ''
  },
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@keyframes scale-in {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-in {
  animation: scale-in 0.3s ease-out;
}
</style>
