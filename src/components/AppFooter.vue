<script setup lang="ts">
import AppFooterCard from '@/components/AppFooterCard.vue';
import AppTitle from '@/components/AppTitle.vue';
import type { app_city } from '@/types.ts';
import { useAppStore } from '@/stores/app.ts';

const appStore = useAppStore();
</script>

<template>
  <div class="space-y-12">
    <AppTitle title="Погода в популярных городах" details="Подробнее" />
    <div class="flex justify-center xl:justify-between flex-wrap gap-8">
      <AppFooterCard
        v-for="(card, key) in appStore.weatherNowExcludeCurrentCity"
        :data="card"
        @click="appStore.selectCity(key as app_city)"
      />
    </div>
  </div>
</template>
