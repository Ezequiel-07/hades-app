import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-options-bar',
  templateUrl: './options-bar.component.html',
  styleUrls: ['./options-bar.component.css']
})
export class OptionsBarComponent implements OnInit {
  @Input() value:any;
  @Output() eventData = new EventEmitter();
  @Output() comments = new EventEmitter();
  body = {
    token:localStorage.getItem('token'),
    public_id: ''
  }
  status = false;

  constructor(private service:HomeService) { }


  ngOnInit(): void {
    this.body.public_id = this.value;
    this.service.VerifyLike(this.body).subscribe(data => {
      this.status = data.value;
    }, error => {this.eventData.emit(error.error.message)});
  }

  like(){
    if(this.status == false){
      this.service.SendLike(this.body).subscribe(data => {
        console.log(data);
        this.ngOnInit();
      }, error => {this.eventData.emit(error.error.message)});
    }
    if(this.status == true){
      this.service.RemoveLike(this.body).subscribe(data => {
        console.log(data);
        this.ngOnInit();
      }, error => {this.eventData.emit(error.error.message)});
    }
  }

  commentsView(){
    this.service.getComments(this.body).subscribe(data => {
      this.comments.emit({comments: data.message, post: this.body.public_id});
    }, error => {console.log(error)});
  }
}
