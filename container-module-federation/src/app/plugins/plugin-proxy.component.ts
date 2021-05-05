import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  Component,
  ComponentFactoryResolver,
  Injector,
  Input,
  OnChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PluginOptions } from './plugin';
@Component({
  selector: 'plugin-proxy',
  template: ` <ng-container #placeHolder></ng-container> `,
})
export class PluginProxyComponent implements OnChanges {
  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;
  constructor(
    private injector: Injector,
    private cfr: ComponentFactoryResolver
  ) {
    console.log('Proxy1');
    }
  @Input() options: PluginOptions;
  async ngOnChanges(): Promise<void> {
    this.viewContainer.clear();
    console.log('PROXY2', this.options);
    const component = await loadRemoteModule(this.options).then(
      (m) => m[this.options.componentName]
    );
    const factory = this.cfr.resolveComponentFactory(component);
    this.viewContainer.createComponent(factory, undefined, this.injector);
  }
}