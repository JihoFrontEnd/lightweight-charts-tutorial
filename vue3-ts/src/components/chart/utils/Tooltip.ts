import { Time } from 'lightweight-charts';

export default class Tooltip {
  name: string;

  time: Time;

  value: number;

  constructor(name: string) {
    this.name = name;
    this.time = '';
    this.value = 0;
  }

  init(): void {
    this.time = '';
    this.value = 0;
  }

  set(time: Time, value: number): void {
    this.time = time;
    this.value = value;
  }
}
