import {Component} from '@angular/core';
import { CounterService } from 'components-lib';

@Component({
  selector: 'app-hello1',
  templateUrl: './hello1.component.html'
})
export class Hello1Component {
  constructor(private counterService: CounterService) {}
}
