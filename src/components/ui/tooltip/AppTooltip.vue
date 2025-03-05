<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const props = defineProps<{ text: string }>();
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <slot name="trigger" />
      </TooltipTrigger>
      <TooltipContent>
        <p class="text-xl">{{ text }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
