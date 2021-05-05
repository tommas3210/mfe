import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  options = {
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'mfe1',
      exposedModule: './Component',
      displayName: 'Pricing Trends',
      componentName: 'Hello1Component',
  };

  components: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  addComponent() {
    this.components.push( {
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'mfe1',
      exposedModule: './Component',
      displayName: 'Pricing Trends',
      componentName: 'Hello1Component',
    }
  )
  }

}
