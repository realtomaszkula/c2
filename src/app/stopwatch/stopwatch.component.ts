import { Component, OnDestroy } from '@angular/core';
import { StopwatchService } from './stopwatch.service';

@Component({
  selector: 'app-stopwatch',
  template: `
  <app-layout>
    <app-time [time]="stopwatch.getTime()"></app-time>
    <app-laps [laps]="stopwatch.getLaps()"></app-laps>
    <app-action-buttons
      [currentState]="stopwatch.getState()"
      (start)="stopwatch.start()"
      (stop)="stopwatch.stop()"
      (lap)="stopwatch.lap()"
      (resume)="stopwatch.resume()"
      (reset)="stopwatch.reset()">
    </app-action-buttons>
  </app-layout>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  providers: [StopwatchService]
})
export class StopwatchComponent implements OnDestroy {
  constructor(public stopwatch: StopwatchService) {}

  ngOnDestroy() {
    this.stopwatch.destroy();
  }
}
