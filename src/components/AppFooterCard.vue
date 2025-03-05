<script setup lang="ts">
import IconByName from '@/components/IconByName.vue';
import { getIconName } from '@/tools/helpers.ts';
const props = defineProps<{ data: any }>();
</script>

<template>
  <article
    class="w-60 flex bg-white flex-col items-center gap-6 py-3 rounded-xl bg-opacity-20 cursor-pointer"
  >
    <h4 class="text-[26px]">{{ data.name }}</h4>
    <small class="text-[18px]"> {{ data.cloudiness }}</small>
    <IconByName :name="getIconName(data.cloudiness)" />
    <h4 class="text-5xl">{{ data.temperature }}°</h4>
    <small class="text-[18px]">Влажность {{ data.humidity }}%</small>
  </article>
</template>
