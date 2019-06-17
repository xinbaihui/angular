import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bb',
  templateUrl: './bb.component.html',
  styleUrls: ['./bb.component.scss']
})
export class BBComponent implements OnInit {
  bbItems: any[];

  constructor() { }

  ngOnInit() {
    this.bbItems = [{
      id: 0,
      name: 'DD',
      time: '2019-06-17 09:00:00',
      address: 'home',
      quantity: 'Middle',
      difficulty: 'Middle',
      interval: ''
    }]
  }

}
