import { Component, OnInit } from '@angular/core';
import { character, chatContent } from '../model'
import { participants, chatContents } from '../data'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  participants: character[]
  chatContents: chatContent[]
  formGroup: FormGroup

  constructor() { }

  ngOnInit() {
    this.participants = participants
    this.chatContents = chatContents

    this.formGroup = new FormGroup({
      xf: new FormControl('',),
      xbh: new FormControl('',),
      xy: new FormControl('',),
      familyInfo: new FormGroup({
        mc: new FormControl(''),
        mb: new FormControl('')
      })
    })
  }

  onSubmit() {
    console.log(this.formGroup.value)
  }

  updateValue() {
    this.formGroup.patchValue({
      familyInfo: {
        mc: 'xy',
        mb: 'xbh'
      }
    })
  }

}
