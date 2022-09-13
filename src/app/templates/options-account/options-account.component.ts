import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-options-account',
  templateUrl: './options-account.component.html',
  styleUrls: ['./options-account.component.css']
})
export class OptionsAccountComponent implements OnInit {
  @Input() body:any;
  @Output() closeEvent = new EventEmitter();
  @Output() resetEvent = new EventEmitter();
  statusFollow:boolean = false;
  statusBlock:boolean = false;

  constructor(private service:ProfileService) { }

  ngOnInit(): void {
    this.service.verifyFollow(this.body).subscribe(data => {
      this.statusFollow = data.value;
    }, error => {console.log(error)});
    this.service.verifyBlock(this.body).subscribe(data => {
      this.statusBlock = data.value;
    }, error => {console.log(error)});
  }

  close(){
    this.resetEvent.emit();
    this.closeEvent.emit();
  }
  follow(){
    this.service.follow(this.body).subscribe(data => {
      console.log(data.message);
      this.resetEvent.emit();
      this.ngOnInit();
    }, error => {console.log(error)});
  }
  unfollow(){
    this.service.unfollow(this.body).subscribe(data => {
      console.log(data.message);
      this.resetEvent.emit();
      this.ngOnInit();
    }, error => {console.log(error)});
  }
  block(){
    this.service.block(this.body).subscribe(data => {
      console.log(data.message);
      this.resetEvent.emit();
      this.ngOnInit();
    }, error => {console.log(error)});
  }
  unlock(){
    this.service.unlock(this.body).subscribe(data => {
      console.log(data.message);
      this.resetEvent.emit();
      this.ngOnInit();
    }, error => {console.log(error)});
  }
}
