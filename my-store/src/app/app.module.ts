import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({  // metadata
  declarations: [ // 声明应用中的所有组件
    AppComponent, // 每个组件必须声明且只能声明在一个ngModule中
    ProductListComponent
  ],
  imports: [  // 应用所需外部模块列表
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  // 顶级类
