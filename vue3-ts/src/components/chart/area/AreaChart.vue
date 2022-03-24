<script setup lang="ts">
import { ITimeScaleApi, Time } from 'lightweight-charts';
import { defineEmits, onMounted, ref } from 'vue';
import render from './render';
import Tooltip from './Tooltip';

const emit = defineEmits<{(event: 'giveRefs', timeScale: ITimeScaleApi, container: HTMLElement, tooltip: Tooltip): void }>();
const container = ref();
const tooltip = ref(new Tooltip('area'));

onMounted(() => {
  const timeScale = render(container.value as HTMLElement);
  emit('giveRefs', timeScale, container.value, tooltip.value as Tooltip);
});
</script>

<template>
  <div id="area-chart" ref="container">
    <div v-show="tooltip.value">
      <h4>
        {{ tooltip.name }} {{ tooltip.date }}
      </h4>
      <p>
        {{ tooltip.value }}
      </p>
    </div>
  </div>
</template>
