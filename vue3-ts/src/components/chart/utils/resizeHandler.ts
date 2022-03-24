import { IChartApi } from 'lightweight-charts';

export default function resizeHandler(chart: IChartApi): void {
  chart.resize(window.innerWidth, 300);
}
