import { Component, OnInit } from '@angular/core';
import { character, chatContent } from '../model'
import { participants, chatContents } from '../data'
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  participants: character[]
  chatContents: chatContent[]
  formGroup: FormGroup

  get others () {
    return this.formGroup.get('others') as FormArray
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.participants = participants
    this.chatContents = chatContents

    this.formGroup= this.fb.group({
      xf: ['', Validators.required],
      xbh: [''],
      xy: [''],
      familyInfo: this.fb.group({
        mc: ['', Validators.required],
        mb: ['']
      }),
      others: this.fb.array([
        this.fb.control('')
      ])
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

  addOthers() {
    this.others.push(this.fb.control(''))
  }
}
