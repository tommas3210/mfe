import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  // { path: 'hello', loadChildren: () => import('mfe1/HelloModule').then(m => m.HelloModule) },
  { path: 'hello',
  loadChildren: () =>
  loadRemoteModule({
    remoteEntry: 'http://localhost:4201/remoteEntry.js',
    remoteName: 'mfe1',
    exposedModule: './HelloModule'
  })
  .then(m => m.HelloModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
