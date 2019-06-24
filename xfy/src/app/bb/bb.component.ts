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
    this.bbService.getBBData().subscribe(data => this.BBData = data)
  }

  add(): void {
    const data = {
      name: 'XX',
      time: '2019-06-24 15:30:00',
      address: 'Comp',
      quantity: 'Middle',
      difficulty: 'Middle',
      interval: 0
    }
    this.bbService.addBB(data as BB)  // add "as BB“ or will report an error: Property 'id' is missing...
      .subscribe((bb: BB) => this.BBData.push(bb))
  }

}
