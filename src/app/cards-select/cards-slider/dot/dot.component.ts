import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss']
})
export class DotComponent implements OnInit {
  @Input() dot;
  @Input() i;
  @Input() activeDot;

  @Output() eventDotSelect = new EventEmitter();

  dotSelect() {
    this.eventDotSelect.emit(this.i);
  }

  ngOnInit() {
  }

}
