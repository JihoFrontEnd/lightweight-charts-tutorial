<script setup lang="ts">
import { ITimeScaleApi } from 'lightweight-charts';
import { defineEmits, onMounted, ref } from 'vue';
import render from './render';

const emit = defineEmits<{(event: 'giveRefs', timeScale: ITimeScaleApi, container: HTMLElement): void }>();

const container = ref();
const another = ref();

onMounted(() => {
  const timeScale = render(container.value as HTMLElement);
  render(another.value as HTMLElement);
  emit('giveRefs', timeScale, container.value);
});
</script>

<template>
  <div id="histogram-chart" ref="container"></div>
  <div ref="another"></div>
</template>
