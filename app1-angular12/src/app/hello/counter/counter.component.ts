import { Component, OnInit } from '@angular/core';
import { CounterService } from 'components-lib';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor(private counterService: CounterService) {}

  incrementCounter() {
    this.counterService.incremet(100);
  }

  ngOnInit(): void {
  }

}