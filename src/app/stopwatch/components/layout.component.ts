import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
  <mat-toolbar color="primary" class="mat-elevation-z4">
    <mat-toolbar-row>Stopwatch</mat-toolbar-row>
  </mat-toolbar>
  <mat-card>
    <mat-card-content>
      <ng-content select="app-time"></ng-content>
      <ng-content select="app-laps"></ng-content>
    </mat-card-content>
    <mat-card-actions>
      <ng-content select="app-action-buttons"></ng-content>
    </mat-card-actions>
  </mat-card>
  `,
  styles: [
    `
      :host {
        display: block;
        min-width: 300px;
        padding: 1em;
      }

      mat-toolbar-row {
        justify-content: center;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {}
