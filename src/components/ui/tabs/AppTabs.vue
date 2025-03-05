<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs/index.ts';
const props = defineProps<{ items: Record<string, any> }>();
const modelValue = defineModel<string>();
</script>

<template>
  <Tabs v-model="modelValue">
    <TabsList v-for="item in items" :key="item.id">
      <TabsTrigger :value="item.value">
        {{ item.display }}
      </TabsTrigger>
    </TabsList>
  </Tabs>
</template>
