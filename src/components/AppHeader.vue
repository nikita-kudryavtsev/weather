<script setup lang="ts">
import AppTabs from '@/components/ui/tabs/AppTabs.vue';
import AppSelect from '@/components/ui/select/AppSelect.vue';
import { useAppStore } from '@/stores/app.ts';
import type { app_city, app_tab } from '@/types.ts';

interface TabItem {
  id: number;
  value: app_tab;
  display: string;
}

interface DropdownItem {
  title: string;
  id: number;
  value: app_city;
}

const props = defineProps<{
  selectedTab: app_tab;
}>();

const emits = defineEmits(['update:selectedTab']);

const appStore = useAppStore();

const tabsData = [
  { id: 1, value: 'main', display: 'Главная' },
  { id: 2, value: 'week', display: 'Погода за неделю' },
] as TabItem[];

const dropdownItems = [
  { title: 'Казань', id: 1, value: 'kazan' },
  { title: 'Москва', id: 2, value: 'moscow' },
  { title: 'Краснодар', id: 3, value: 'krasnodar' },
  { title: 'Тула', id: 4, value: 'tula' },
  { title: 'Красноярск', id: 4, value: 'krasnoyarsk' },
  { title: 'Уфа', id: 5, value: 'ufa' },
] as DropdownItem[];

const onUpdateTab = (value: app_tab) => emits('update:selectedTab', value);
</script>

<template>
  <header class="flex justify-between">
    <AppTabs :items="tabsData" :model-value="selectedTab" @update:model-value="onUpdateTab" />
    <AppSelect
      :items="dropdownItems"
      :model-value="appStore.selectedCity"
      @update:model-value="appStore.selectCity"
    />
  </header>
</template>
