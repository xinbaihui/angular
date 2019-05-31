import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Hot', 'Super Strong']
  model = new Hero(1, 'DD', this.powers[0], 'Nothing')
  submitted = false

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true
  }

  newHero() {
    this.model = new Hero(30, '', '')
  }

}
