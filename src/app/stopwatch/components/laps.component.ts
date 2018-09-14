import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-laps',
  template: `
  <ng-container *ngIf="laps && laps.length > 0">
    <mat-list dense *ngFor="let lap of reversedLaps; index as index">
      <mat-list-item>
        <div class="row">
          <span>{{ laps.length - index | leadingZero }}</span>
          <span appColor="primary">{{ lap | timeString }}</span>
        </div>
      </mat-list-item>
    </mat-list>
  </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
        overflow: auto;
        height: 240px;
      }

      .row {
        flex: 1;
        display: flex;
        justify-content: space-between;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LapsComponent {
  @Input()
  laps: ReadonlyArray<string> = [];

  get reversedLaps() {
    return [...this.laps].reverse();
  }
}
