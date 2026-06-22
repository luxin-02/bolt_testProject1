<template>
  <div class="min-h-screen flex">
    <!-- Left Panel - Branding (hidden on mobile) -->
    <div class="hidden lg:flex lg:w-1/2 bg-primary-600 relative overflow-hidden flex-col justify-between p-12">
      <div class="relative z-10">
        <h1 class="text-4xl font-bold text-white">AppName</h1>
        <p class="text-primary-200 mt-2 text-lg">Build something amazing</p>
      </div>

      <div class="relative z-10">
        <blockquote class="text-primary-100 text-lg italic">
          "This platform has completely transformed how our team works together."
        </blockquote>
        <p class="text-primary-300 mt-4 text-sm">Sarah Chen, CTO at TechCorp</p>
      </div>

      <!-- Decorative shapes -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary-700 rounded-full translate-y-1/2 -translate-x-1/2 opacity-40" />
      <div class="absolute top-1/2 left-1/3 w-48 h-48 bg-accent-500 rounded-full opacity-20" />
    </div>

    <!-- Right Panel - Auth Forms -->
    <div class="flex-1 flex items-center justify-center p-4 sm:p-8 bg-bg-primary">
      <div class="w-full max-w-md">
        <!-- Mobile branding -->
        <div class="lg:hidden text-center mb-8">
          <h1 class="text-2xl font-bold text-primary-600">AppName</h1>
          <p class="text-text-secondary text-sm mt-1">Build something amazing</p>
        </div>

        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
}
</script>
