<script setup lang="ts">
import {
  defineEmits, defineProps, onMounted, ref,
} from 'vue';

import ChartRef from '@/components/chart/utils/ChartRef';
import Tooltip from '@/components/chart/utils/Tooltip';

const props = defineProps<{
  name: string,
  render:(container: HTMLElement, tooltip: Tooltip) => ChartRef
}>();
const emit = defineEmits<{(event: 'giveRef', chartRef: ChartRef): void}>();

const container = ref();
const tooltip = ref(new Tooltip(props.name));

onMounted(() => emit('giveRef', props.render(container.value as HTMLElement, tooltip.value as Tooltip)));
</script>

<template>
  <div ref="container">
    <!-- <div v-show="tooltip.value"> -->
    <div>
      {{ tooltip }}
    </div>
  </div>
</template>
