<script setup lang="ts">
import { ref } from 'vue';

import Chart from '@/components/chart/Couple/Chart.vue';
import areaRender from '@/components/chart/Couple/areaRender';
import histogramRender from '@/components/chart/Couple/histogramRender';

import ChartRef from '@/components/chart/utils/ChartRef';
import {
  MouseEventParams, Time, TimeRange,
} from 'lightweight-charts';

const chartRefs = ref<ChartRef[]>([]);

function addEventListener() {
  const mouseEnterEventHandler = (e: MouseEvent): void => {
    chartRefs.value
      .filter((c) => c.container === e.target as HTMLElement)
      .forEach((c) => c.active());
  };
  const mouseLeaveEventHandler = (e: MouseEvent): void => {
    chartRefs.value
      .filter((c) => c.container === e.target as HTMLElement)
      .forEach((c) => c.deactive());
  };
  const timeRangeChangeEventHandler = (ntr: TimeRange | null): void => {
    if (!ntr) return;
    chartRefs.value
      .filter((c) => !c.isActive)
      .forEach((c) => c.chart.timeScale().setVisibleRange(ntr));
  };

  function isValid(param?: MouseEventParams): boolean {
    return !!param && !!param.point && !!param.time;
  }

  const hoverEventHandler = (param: MouseEventParams) => {
    if (!isValid(param)) {
      chartRefs.value.forEach((chartRef) => chartRef.tooltip.init());
      return;
    }

    const time = param.time as Time;
    chartRefs.value.forEach((chartRef) => {
      chartRef.tooltip.set(time, chartRef.getValueByTime(time));
    });
  };

  chartRefs.value.forEach((chartRef) => {
    chartRef.container.addEventListener('mouseenter', mouseEnterEventHandler);
    chartRef.container.addEventListener('mouseleave', mouseLeaveEventHandler);
    chartRef.chart.timeScale().subscribeVisibleTimeRangeChange(timeRangeChangeEventHandler);
    chartRef.chart.subscribeCrosshairMove(hoverEventHandler);
  });
}

function fillChartRef(chartRef: ChartRef) {
  chartRefs.value.push(chartRef);
  if (chartRefs.value.length === 2) addEventListener();
}
</script>

<template>
  <h1>Chart Coupling</h1>
  <Chart name="area" :render="areaRender" @give-ref="fillChartRef" />
  <Chart name="histogram" :render="histogramRender" @give-ref="fillChartRef" />
</template>
