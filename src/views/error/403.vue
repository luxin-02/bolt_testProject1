<template>
  <div class="min-h-screen bg-bg-base flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-error-500">403</h1>
      <p class="text-text-secondary mt-4">Access Forbidden</p>
      <router-link to="/" class="text-primary-600 mt-4 inline-block">Go Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Forbidden',
}
</script>
