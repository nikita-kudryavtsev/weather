<script setup lang="ts">
import IconByName from '@/components/IconByName.vue';
import { useAppStore } from '@/stores/app.ts';
import { getIconName } from '@/tools/helpers.ts';
import AppDayItem from '@/components/AppDayItem.vue';

const appStore = useAppStore();
</script>

<template>
  <article class="flex flex-col xl:flex-row gap-5">
    <div v-if="appStore.weatherNowInCurrentCity" class="md:flex-1 flex gap-12 items-center">
      <IconByName :name="getIconName(appStore.weatherNowInCurrentCity.cloudiness)" size="large" />
      <div class="text-[70px] md:text-[100px] font-bold">
        {{ appStore.weatherNowInCurrentCity.temperature }}°
      </div>
      <div class="text-lg md:text-2xl">
        <div>{{ appStore.weatherNowInCurrentCity.cloudiness }}</div>
        <div>Влажность {{ appStore.weatherNowInCurrentCity.humidity }}%</div>
        <div>Ветер {{ appStore.weatherNowInCurrentCity.wind_speed }} м/с</div>
      </div>
    </div>

    <div class="md:flex-1 flex flex-col gap-4">
      <AppDayItem
        v-for="item in appStore.dayForecast"
        class="flex"
        :data="item"
        :key="item.datetime"
      />
    </div>
  </article>
</template>
