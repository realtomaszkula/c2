import { Injectable } from '@angular/core';

export enum StopwatchState {
  On = 'On',
  Off = 'Off',
  Paused = 'Paused'
}

@Injectable()
export class StopwatchService {
  private state = StopwatchState.Off;
  private time = 0;
  private laps: number[] = [];
  private intervalId: number | null = null;

  getState() {
    return this.state;
  }

  getTime() {
    return this.time;
  }

  getLaps() {
    return this.laps;
  }

  destroy() {
    this.clearTimerInterval();
  }

  start() {
    this.state = StopwatchState.On;
    this.setTimerInterval();
  }

  resume() {
    this.state = StopwatchState.On;
    this.setTimerInterval();
  }

  stop() {
    this.state = StopwatchState.Paused;
    this.clearTimerInterval();
  }

  reset() {
    this.state = StopwatchState.Off;
    this.time = 0;
    this.laps = [];
  }

  lap() {
    this.laps = [...this.laps, this.time];
  }

  private setTimerInterval() {
    this.intervalId = window.setInterval(() => (this.time += 10), 100);
  }

  private clearTimerInterval() {
    window.clearInterval(this.intervalId as number);
    this.intervalId = null;
  }
}
