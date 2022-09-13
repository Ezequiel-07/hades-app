import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() user:any;
  @Input() values:any;
  @Output() post = new EventEmitter();
  body = {
    token: localStorage.getItem('token'),
    _id: '',
  }
  optionStatus:boolean = false; 

  constructor(private service:HomeService) { }

  ngOnInit(): void {
    this.body._id = this.user._id;
  }

  preview(value:any){
    this.post.emit(value);
  }
  
  options(){
    this.ngOnInit();
    this.optionStatus = true;
  }

  reset(){
    this.ngOnInit();
  }

  closeOptions(){
    this.optionStatus = false;
    this.ngOnInit();
  }
}
