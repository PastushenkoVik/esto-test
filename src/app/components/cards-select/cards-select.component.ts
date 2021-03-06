import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-select',
  templateUrl: './cards-select.component.html',
  styleUrls: ['./cards-select.component.scss']
})
export class CardsSelectComponent implements OnInit {
  @Input() cardSelect;

  buttonType = {isButtonGreen: true};

  constructor() { }

  ngOnInit() {
  }

}
