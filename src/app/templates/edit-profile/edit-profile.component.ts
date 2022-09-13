import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  @Input() user:any;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeEvent(){
    this.close.emit(false);
  }
}
