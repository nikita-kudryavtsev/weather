<script setup lang="ts">
import IconByName from '@/components/IconByName.vue';
import { getIconName } from '@/tools/helpers.ts';
import { getDateTimeAndTimesDay } from '@/tools/helpers.ts';

const props = defineProps<{ data: any }>();
</script>

<template>
  <section class="flex justify-between items-center text-sm md:text-[18px]">
    <div class="flex flex-col cell items-center">
      <div>{{ getDateTimeAndTimesDay(data.datetime).dateTime }}</div>
      <div>{{ getDateTimeAndTimesDay(data.datetime).timesDay }}</div>
    </div>
    <div class="cell text-2xl md:text-5xl">{{ data.temperature }}°</div>
    <div class="flex-1">
      <IconByName :name="getIconName(data.cloudiness)" />
    </div>
    <div class="cell">{{ data.cloudiness }}</div>
    <div class="cell">{{ data.wind_speed }} м/с</div>
    <div class="cell">{{ data.humidity }}%</div>
  </section>
</template>

<style scoped lang="postcss">
.cell {
  @apply flex-1 flex justify-center;
}
</style>
