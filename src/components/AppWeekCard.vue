<script setup lang="ts">
import IconByName from '@/components/IconByName.vue';
import { getIconName } from '@/tools/helpers.ts';

const props = defineProps<{ data: any }>();
</script>

<template>
  <article class="flex flex-col items-center gap-6 text-[18px] p-3">
    <div>
      {{ data.day }}
    </div>
    <IconByName :name="getIconName(data.cloudiness)" />
    <div>{{ data.temperature }}°</div>
  </article>
</template>
