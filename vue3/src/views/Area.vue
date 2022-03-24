<script setup>
import { onMounted, ref } from "vue";
import { createChart } from 'lightweight-charts';
import data from '@/assets/data';

const chartRef = ref();
const chart = ref(null);
const area = ref(null);

const chartOptions = {
  height: 300,
  layout: {
    // background: "green",
    textColor: "red",
    fontFamily: "Menlo",
  },
  leftPriceScale: {
    autoScale: false,
    mode: 0,
    invertScale: true,
  },
  timeScale: {
    visible: true,
    borderColor: "rgb(0, 0, 255)",
  },
  crosshair: {
    mode: 1, // Magnet
    vertLine: {
      color: "#0F0",
      width: 2,
      style: 3,
      visible: true,
      labelVisible: true,
      labelBackgroundColor: "#000"
    },
    horzLine: {
      color: "#F00",
      width: 2,
      style: 4,
      visible: true,
      labelVisible: true,
      labelBackgroundColor: "#000"
    }
  },
  grid: {
    vertLines: {
        color: "#FF0",
        style: 0,
        visible: true,
    },
    horzLines: {
        color: "#0FF",
        style: 0,
        visible: true,
    },
  },
  localization: {
    locale: "ko-KR",
    priceFormatter: (p) => `${p.toFixed(2)} 점`,
    // timeFormatter?: TimeFormatterFn,
    dateFormat: "yyyy/MM/dd",
  },
  handleScroll: {
    mouseWheel: false,
    pressedMouseMove: false,
    horzTouchDrag: false,
    vertTouchDrag: false,
  },
  handleScale: {
    mouseWheel: false,
    pinch: true,
    axisPressedMouseMove: false,
    axisDoubleClickReset: true,
  },
  kineticScroll: {
    touch: false,
    mouse: true,
  }
};

const areaOptions = {
  title: 'AREA',
  topColor: "#000",
  bottomColor: "#FFF",
  lineColor: "#0F0",
  lineWidth: 2,
  priceFormat: {
    type: "volume"
  }
};

onMounted(() => {
  chart.value = createChart(chartRef.value, chartOptions);
  area.value = chart.value.addAreaSeries(areaOptions);
  area.value.setData(data.map((d) => ({ time: d.time, value: d.close })));
});
</script>

<template>
  <h1>Area</h1>
  <div ref="chartRef" />
  <section class="area-options">
    <article>
      <h3>Chart Options</h3>
      <pre><code>{{ chartOptions }}</code></pre>
    </article>
    <article>
      <h3>Area Options</h3>
      <pre><code>{{ areaOptions }}</code></pre>
    </article>
  </section>
</template>

<style>
pre {
  text-align: left;
}

.area-options {
  display: flex;
  justify-content: space-around;
}
</style>