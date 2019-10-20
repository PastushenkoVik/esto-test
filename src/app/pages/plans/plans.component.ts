import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  sectionTitle = 'Find a plan that works for you.';

  constructor() { }

  ngOnInit() {
  }

}
