import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BBComponent } from './bb/bb.component';
import { OthersComponent } from './others/others.component';

const routes: Routes = [{
  path: 'BB',
  component: BBComponent
}, {
  path: 'others',
  component: OthersComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
