<script setup lang="ts">
import { defineEmits, onMounted, ref } from 'vue';

import render from '@/components/chart/Couple/area/render';
import ChartRef from '@/components/chart/utils/ChartRef';
import Tooltip from '@/components/chart/utils/Tooltip';

const emit = defineEmits<{(event: 'giveRef', chartRef: ChartRef): void}>();

const container = ref();
const tooltip = ref(new Tooltip('area'));

onMounted(() => emit('giveRef', render(container.value as HTMLElement, tooltip.value as Tooltip)));
</script>

<template>
  <div ref="container">
    <div v-show="tooltip.value">
      {{ tooltip }}
    </div>
  </div>
</template>
