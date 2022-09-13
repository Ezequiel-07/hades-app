import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lateral-bar',
  templateUrl: './lateral-bar.component.html',
  styleUrls: ['./lateral-bar.component.css']
})
export class LateralBarComponent implements OnInit {
  @Output() modeValue = new EventEmitter();

  mode:any;

  constructor() { }

  ngOnInit(): void {
  }

  selectMode(value:any){
    this.mode = value;
    this.modeValue.emit(value);
  }
}
