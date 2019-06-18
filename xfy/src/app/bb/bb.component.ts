import { Component, OnInit } from '@angular/core';
import { BB } from '../model';
import { BbService } from '../bb.service'

@Component({
  selector: 'app-bb',
  templateUrl: './bb.component.html',
  styleUrls: ['./bb.component.scss']
})
export class BBComponent implements OnInit {
  BBData: BB[];

  constructor(private bbService: BbService) { }

  ngOnInit() {
    this.getBBdata()
  }

  getBBdata(): void {
    this.BBData = this.bbService.getBBData()
  }

}
