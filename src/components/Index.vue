<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import { computed, onMounted, ref, watch } from 'vue';
import AppTitle from '@/components/AppTitle.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppBodyToday from '@/components/AppBodyToday.vue';
import AppBodyWeek from '@/components/AppBodyWeek.vue';
import { useAppStore } from '@/stores/app.ts';
import { useWeather } from '@/composables/weather.ts';
import { getFormattedWeekDay } from '@/tools/helpers.ts';
import type { app_tab } from '@/types.ts';

const appStore = useAppStore();
const { setWeatherNowInCities, setWeekForecast, setDayForecast } = useWeather();

const selectedTab = ref<app_tab>('main');
const bodyComponent = computed(() => (selectedTab.value === 'main' ? AppBodyToday : AppBodyWeek));

watch(
  () => appStore.selectedCity,
  () => {
    setWeekForecast();
    setDayForecast();
  },
  { immediate: true }
);

const titleData = computed(() => ({
  title: `Погода в городе ${appStore.weatherNowInCurrentCity.name}`,
  subtitle: getFormattedWeekDay(new Date()),
}));

onMounted(setWeatherNowInCities);
</script>

<template>
  <div class="px-10 pt-10 pb-14 flex flex-col justify-between h-dvh gap-8">
    <AppHeader v-model:selected-tab="selectedTab" />
    <div class="space-y-12" v-if="appStore.weatherNowInCurrentCity">
      <AppTitle :title="titleData.title" :subtitle="titleData.subtitle" />
      <Transition name="fade" mode="out-in">
        <component :is="bodyComponent" />
      </Transition>
    </div>
    <AppFooter />
  </div>
</template>
