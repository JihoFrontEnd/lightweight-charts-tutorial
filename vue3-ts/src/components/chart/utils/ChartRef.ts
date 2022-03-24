import { IChartApi, Time } from 'lightweight-charts';
import Tooltip from '@/components/chart/utils/Tooltip';

export default class ChartRef {
  chart: IChartApi;

  container: HTMLElement;

  tooltip: Tooltip;

  isActive: boolean;

  getValueByTime: (t: Time) => number;

  constructor(
    chart: IChartApi,
    container: HTMLElement,
    tooltip: Tooltip,
    callback: (t: Time) => number,
  ) {
    this.chart = chart;
    this.container = container;
    this.tooltip = tooltip;
    this.isActive = false;
    this.getValueByTime = callback;
  }

  active(): void {
    this.isActive = true;
  }

  deactive(): void {
    this.isActive = false;
  }
}
