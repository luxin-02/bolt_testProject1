<template>
  <div>
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-text-primary">Dashboard</h1>
      <p class="text-text-secondary mt-2">Welcome back to your workspace</p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <ui-card hoverable v-for="stat in stats" :key="stat.label">
        <div class="text-text-secondary text-sm font-medium">{{ stat.label }}</div>
        <div class="text-3xl font-bold text-text-primary mt-3">{{ stat.value }}</div>
        <div class="text-xs mt-2" :class="stat.trend > 0 ? 'text-success-600' : 'text-error-600'">
          {{ stat.trend > 0 ? '+' : '' }}{{ stat.trend }}%
        </div>
      </ui-card>
    </div>

    <!-- Recent Activity -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2">
        <ui-card>
          <template #header>
            <h2 class="text-xl font-semibold text-text-primary">Recent Activity</h2>
          </template>

          <div class="space-y-4">
            <div v-for="activity in activities" :key="activity.id" class="flex gap-4 pb-4 border-b border-border-light last:border-0 last:pb-0">
              <div class="w-10 h-10 rounded-full flex-shrink-0" :class="activity.colorClass" />
              <div class="flex-1 min-w-0">
                <p class="text-text-primary font-medium">{{ activity.title }}</p>
                <p class="text-text-tertiary text-sm">{{ activity.description }}</p>
                <p class="text-text-tertiary text-xs mt-1">{{ activity.time }}</p>
              </div>
            </div>
          </div>
        </ui-card>
      </div>

      <!-- Quick Actions -->
      <div>
        <ui-card>
          <template #header>
            <h3 class="text-lg font-semibold text-text-primary">Quick Actions</h3>
          </template>

          <div class="space-y-2">
            <ui-button variant="secondary" class="w-full justify-start">New Project</ui-button>
            <ui-button variant="secondary" class="w-full justify-start">Add Team Member</ui-button>
            <ui-button variant="secondary" class="w-full justify-start">Settings</ui-button>
            <ui-button variant="tertiary" class="w-full justify-start">Documentation</ui-button>
          </div>
        </ui-card>
      </div>
    </div>

    <!-- Modal Demo -->
    <button @click="showModal = true" class="mt-8 px-4 py-2 text-sm text-primary-600 hover:text-primary-700">
      Open Modal Demo
    </button>

    <ui-modal v-model:visible="showModal" title="Demo Modal">
      <p class="text-text-secondary mb-4">This is a demo modal component with the new design system.</p>

      <template #footer>
        <ui-button variant="tertiary" @click="showModal = false">Cancel</ui-button>
        <ui-button variant="primary" @click="showModal = false">Confirm</ui-button>
      </template>
    </ui-modal>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      showModal: false,
      stats: [
        { label: 'Total Users', value: '1,234', trend: 12 },
        { label: 'Revenue', value: '$45.2K', trend: 8 },
        { label: 'Projects', value: '42', trend: 5 },
        { label: 'Growth', value: '+23%', trend: 18 },
      ],
      activities: [
        { id: 1, title: 'New user registered', description: 'Sarah Johnson joined your team', time: '2 hours ago', colorClass: 'bg-primary-100' },
        { id: 2, title: 'Payment received', description: '$2,500 from Acme Corp', time: '4 hours ago', colorClass: 'bg-success-100' },
        { id: 3, title: 'System update', description: 'All systems updated successfully', time: '1 day ago', colorClass: 'bg-accent-100' },
        { id: 4, title: 'Report generated', description: 'Monthly analytics report is ready', time: '2 days ago', colorClass: 'bg-warning-100' },
      ],
    }
  },
}
</script>
