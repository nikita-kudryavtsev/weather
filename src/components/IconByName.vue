<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, ref, watch } from 'vue';
const props = withDefaults(defineProps<{ name: string; size?: 'small' | 'large' }>(), {
  size: 'small',
});
const icon = ref();

const iconStyle = computed(() => ({
  width: props.size === 'small' ? 60 : 160,
  height: props.size === 'small' ? 42 : 125,
}));

const onUpdateIcon = () => {
  icon.value = defineAsyncComponent(() => import(`../assets/icons/${props.name}.svg`));
};
onMounted(onUpdateIcon);

watch(() => props.name, onUpdateIcon);
</script>

<template>
  <component :is="icon" :style="iconStyle" />
</template>
