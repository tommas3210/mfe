import {Component} from '@angular/core';
import { CounterService } from 'components-lib';

@Component({
  selector: 'app-hello2',
  templateUrl: './hello2.component.html'
})
export class Hello2Component {

  constructor(private counterService: CounterService) {}
}
