import { Component, OnInit } from '@angular/core';
import { BB } from '../model';

@Component({
  selector: 'app-bb',
  templateUrl: './bb.component.html',
  styleUrls: ['./bb.component.scss']
})
export class BBComponent implements OnInit {
  bbItems: BB[];

  constructor() { }

  ngOnInit() {
    this.bbItems = [{
      id: 0,
      name: 'DD',
      time: '2019-06-17 09:00:00',
      address: 'home',
      quantity: 'Middle',
      difficulty: 'Middle',
      interval: 0
    }, {
      id: 1,
      name: 'DD',
      time: '2019-06-17 19:00:00',
      address: 'home',
      quantity: 'Middle',
      difficulty: 'Middle',
      interval: 0
    }]
  }

}
