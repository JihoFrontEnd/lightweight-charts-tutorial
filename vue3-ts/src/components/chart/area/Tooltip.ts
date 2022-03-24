import { Time } from 'lightweight-charts';

export default class Tooltip {
  #name: string;

  #date: Time;

  #value: number;

  constructor(name: string) {
    this.#name = name;
    this.#date = '';
    this.#value = 0;
  }

  init(): void {
    this.#date = '';
    this.#value = 0;
  }

  set(): void {
    this.#date = '';
    this.#value = 0;
  }

  get name(): string {
    return this.#name;
  }

  get date(): Time {
    return this.#date;
  }

  get value(): number {
    return this.#value;
  }
}
