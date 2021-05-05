import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class ServicesModule { }

// @Injectable({
//   providedIn: 'root',
// })
@Injectable({
  providedIn: ServicesModule
})
export class CounterService {
  private counterValue = 100;

  public get counter(): number {
    return this.counterValue;
  }

  constructor() {
  }

  public incremet(incrementAmount: number): void {
    this.counterValue = this.counterValue + incrementAmount;
  }
}
