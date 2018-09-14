import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-stopwatch></app-stopwatch>
  `,
  styles: [
    `
      :host {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `
  ]
})
export class AppComponent {}
