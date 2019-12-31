import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{
  path: 'crisis',
  component: CrisisListComponent
}, {
  path: 'heros',
  component: HeroListComponent
}, {
  path: '',
  pathMatch: 'full',  // 告诉路由器如何用URL匹配路由的路径， full：URL 中剩下的、未匹配的部分必须等于 ''
                      // 'prefix'：当剩下的URL 以这个跳转路由中的 prefix 值开头时，就会匹配上这个跳转路由。
  redirectTo: 'heros'
}, {
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
