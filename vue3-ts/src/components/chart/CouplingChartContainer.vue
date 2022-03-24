<script setup lang="ts">
import { ITimeScaleApi, Range, TimeRange } from 'lightweight-charts';
import { ref } from 'vue';
import AreaChart from './area/AreaChart.vue';
import AreaTooltip from './area/Tooltip';
import HistogramChart from './histogram/HistogramChart.vue';

class ChildRef {
  ts: ITimeScaleApi;

  con: HTMLElement;

  tt?: AreaTooltip;

  state: boolean;

  constructor(t: ITimeScaleApi, c: HTMLElement, tt?: AreaTooltip) {
    this.ts = t;
    this.con = c;
    this.tt = tt;
    this.state = false;
  }

  get timeScale() {
    return this.ts;
  }

  get container() {
    return this.con;
  }

  get tooltip() {
    return this.tt;
  }

  get isActive() {
    return this.state;
  }

  active() {
    this.state = true;
  }

  deactive() {
    this.state = false;
  }
}

const childRefs = ref<Array<ChildRef>>([]);

const currentRange = ref<Range<number>>({ from: 0, to: 1 });

const rangeHandler = (e: WheelEvent) => {
  if (!currentRange.value) return;

  let delta = 0;
  if (e.deltaX <= 0 && e.deltaY <= 0) {
    delta = Math.min(e.deltaX, e.deltaY);
  } else if (e.deltaX >= 0 && e.deltaY >= 0) {
    delta = Math.max(e.deltaX, e.deltaY);
  } else if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
    delta = e.deltaY;
  } else {
    delta = e.deltaX;
  }

  let from = currentRange.value.from + delta;
  let to = from + 100;

  console.log({ e, from, to });

  const areaDataLength = 150;

  if (to > areaDataLength + 10) {
    to = areaDataLength + 10;
    from = to - 100;
  } else if (from < -10) {
    from = -10;
    to = from + 100;
  }

  currentRange.value = { from, to };
  childRefs.value.forEach((child) => child.timeScale.setVisibleLogicalRange(currentRange.value));
};

function addEventListener() {
  const mouseEnterEventHandler = (e: MouseEvent): void => {
    childRefs.value
      .filter((c) => c.container.id === (e.target as HTMLElement).id)
      .forEach((c) => c.active());
  };
  const mouseLeaveEventHandler = (e: MouseEvent): void => {
    childRefs.value
      .filter((c) => c.container.id === (e.target as HTMLElement).id)
      .forEach((c) => c.deactive());
  };
  const timeRangeChangeEventHandler = (ntr: TimeRange | null): void => {
    if (!ntr) return;
    childRefs.value
      .filter((c) => !c.isActive)
      .forEach((c) => c.timeScale.setVisibleRange(ntr));
  };
  childRefs.value.forEach((child) => {
    child.container.addEventListener('mouseenter', mouseEnterEventHandler);
    child.container.addEventListener('mouseleave', mouseLeaveEventHandler);
    child.timeScale.subscribeVisibleTimeRangeChange(timeRangeChangeEventHandler);
  });
}

function fillRefs(timeScale: ITimeScaleApi, container: HTMLElement, tooltip?: AreaTooltip) {
  childRefs.value.push(new ChildRef(timeScale, container, tooltip));
  if (childRefs.value.length === 2) {
    addEventListener();
  }
}
</script>

<template>
  <AreaChart @give-refs="fillRefs" />
  <HistogramChart @give-refs="fillRefs" />
</template>
