<script setup lang="ts">
import AppWeekCard from '@/components/AppWeekCard.vue';
import { useAppStore } from '@/stores/app.ts';

const appStore = useAppStore();
</script>

<template>
  <div class="flex justify-center md:justify-start gap-5 flex-wrap">
    <AppWeekCard v-for="item in appStore.weekForecast" :data="item" :key="item.day" />
  </div>
</template>
