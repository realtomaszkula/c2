import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-time',
  template: `
  <h1 class="mat-h1" appColor="primary">{{ time | timeString }}</h1>
  `,
  styles: [
    `
      :host {
        display: block;
        text-align: center;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeComponent {
  @Input()
  time: number;
}
