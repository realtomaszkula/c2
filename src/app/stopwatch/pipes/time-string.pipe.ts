import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeString'
})
export class TimeStringPipe implements PipeTransform {
  transform(x: number): string {
    return [
      Math.floor(x / 60 / 60),
      Math.floor((x / 60) % 60),
      Math.floor(x % 60)
    ]
      .map(String)
      .map(s => s.padStart(2, '0'))
      .join(':');
  }
}
