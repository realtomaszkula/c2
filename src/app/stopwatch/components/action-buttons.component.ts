import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { StopwatchState } from '../stopwatch.service';

@Component({
  selector: 'app-action-buttons',
  template: `
  <ng-container [ngSwitch]="currentState">
    <ng-container *ngSwitchCase="state.Off">
      <button mat-stroked-button (click)="start.emit()" color="primary">Start</button>
    </ng-container>
    <ng-container *ngSwitchCase="state.On">
      <button mat-stroked-button (click)="stop.emit()" color="warn">Stop</button>
      <button mat-stroked-button (click)="lap.emit()">Lap</button>
    </ng-container>
    <ng-container *ngSwitchCase="state.Paused">
      <button mat-stroked-button (click)="resume.emit()" color="primary">Resume</button>
      <button mat-stroked-button (click)="reset.emit()">Reset</button>
    </ng-container>
  </ng-container>
  `,
  styles: [
    `
      :host {
        display: flex;
      }

      button {
        flex: 1;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionButtonsComponent {
  @Output()
  start = new EventEmitter<void>();
  @Output()
  stop = new EventEmitter<void>();
  @Output()
  lap = new EventEmitter<void>();
  @Output()
  resume = new EventEmitter<void>();
  @Output()
  reset = new EventEmitter<void>();

  @Input()
  currentState: StopwatchState;

  state = StopwatchState;
}
