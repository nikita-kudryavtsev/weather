<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
const modelValue = defineModel({ default: 'kazan' });
const props = defineProps<{ items: Record<string, any> }>();
</script>

<template>
  <Select v-model="modelValue">
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Выбери город" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem v-for="item in items" :value="item.value" :key="item.id">
          {{ item.title }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
