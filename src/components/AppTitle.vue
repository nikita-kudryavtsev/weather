<script setup lang="ts">
import AppTooltip from '@/components/ui/tooltip/AppTooltip.vue';

const props = defineProps<{ title: string; subtitle?: string; details?: string }>();
</script>

<template>
  <div class="space-y-4">
    <div class="flex gap-4">
      <h2 class="text-4xl font-bold">{{ title }}</h2>
      <AppTooltip v-if="details" :text="details">
        <template #trigger>
          <span
            class="rounded-full h-9 w-9 inline-flex justify-center items-center bg-white bg-opacity-30 text-xl"
            >?</span
          >
        </template>
      </AppTooltip>
    </div>
    <h3 class="text-3xl opacity-60">{{ subtitle }}</h3>
  </div>
</template>
