import { Component, OnDestroy } from '@angular/core';
import { StopwatchState } from './stopwatch';

@Component({
  selector: 'app-stopwatch',
  template: `
  <app-layout>
    <app-time [time]="time"></app-time>
    <app-laps [laps]="laps"></app-laps>
    <app-action-buttons
      [currentState]="state"
      (start)="onStart()"
      (stop)="onStop()"
      (lap)="onLap()"
      (resume)="onResume()"
      (reset)="onReset()">
    </app-action-buttons>
  </app-layout>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class StopwatchComponent implements OnDestroy {
  private intervalId: number | null = null;

  state = StopwatchState.Off;
  time = 0;
  laps: number[] = [];

  ngOnDestroy() {
    this.clearTimerInterval();
  }

  onStart() {
    this.state = StopwatchState.On;
    this.setTimerInterval();
  }

  onResume() {
    this.state = StopwatchState.On;
    this.setTimerInterval();
  }

  onStop() {
    this.state = StopwatchState.Paused;
    this.clearTimerInterval();
  }

  onReset() {
    this.state = StopwatchState.Off;
    this.time = 0;
    this.laps = [];
  }

  onLap() {
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
