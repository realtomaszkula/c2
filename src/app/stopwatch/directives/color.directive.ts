import { Directive, HostBinding, Input } from '@angular/core';

export enum AppColor {
  Primary = 'primary',
  Accent = 'accent'
}

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @HostBinding('class.primary')
  get primaryClass() {
    return this.appColor === AppColor.Primary;
  }

  @HostBinding('class.accent')
  get accentClass() {
    return this.appColor === AppColor.Accent;
  }

  private _appColor: AppColor;
  get appColor(): AppColor {
    return this._appColor;
  }

  @Input()
  set appColor(value: AppColor) {
    this._appColor = value;
  }
}
