import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';
import { ActionButtonsComponent } from './components/action-buttons.component';
import { LapsComponent } from './components/laps.component';
import { LayoutComponent } from './components/layout.component';
import { TimeComponent } from './components/time.component';
import { ColorDirective } from './directives/color.directive';
import { LeadingZeroPipe } from './pipes/leading-zero.pipe';
import { TimeStringPipe } from './pipes/time-string.pipe';
import { StopwatchComponent } from './stopwatch.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule
  ],
  declarations: [
    StopwatchComponent,
    TimeStringPipe,
    ActionButtonsComponent,
    LapsComponent,
    TimeComponent,
    LeadingZeroPipe,
    ColorDirective,
    LayoutComponent
  ],
  exports: [StopwatchComponent]
})
export class StopwatchModule {}
