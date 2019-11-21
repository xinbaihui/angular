import { Component, OnInit } from '@angular/core';
import { products } from '../products'

// @Component: decorate
@Component({
  selector: 'app-product-list',  // 3 metedata properties
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = products

  constructor() { }

  // 组件创建完后调用，通常放初始化逻辑
  ngOnInit() {
  }

}
