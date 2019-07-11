import { Component, OnInit } from '@angular/core';
import { BB } from '../model';
import { BbService } from '../bb.service'
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bb',
  templateUrl: './bb.component.html',
  styleUrls: ['./bb.component.scss']
})
export class BBComponent implements OnInit {
  BBData: BB[];
  modalOpened: boolean;
  form: FormGroup;
  error: any;

  constructor(private fb: FormBuilder, private bbService: BbService) { }

  ngOnInit() {
    this.getBBdata()
    this.modalOpened = false
    this.form = this.fb.group({
      name: ['XX', Validators.required],
      time: ['', Validators.required],
      address: ['home'],
      quantity: ['middle']
    })
  }

  getBBdata(): void {
    this.bbService.getBBData().subscribe(
      data => this.BBData = data['bbs']),
      error => this.error = error
  }

  modalConfirm(): void {
    console.log(this.form.value)
    this.bbService.addBB(this.form.value as BB)  // add "as BB“ or will report an error: Property 'id' is missing...
      .subscribe(
        (bb: BB) => {
          this.BBData.push(bb)
          this.modalOpened = false
        },
        error => this.error = error
      )
  }

}
