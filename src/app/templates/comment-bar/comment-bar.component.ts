import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-comment-bar',
  templateUrl: './comment-bar.component.html',
  styleUrls: ['./comment-bar.component.css']
})
export class CommentBarComponent implements OnInit {
  @Input() comments:any;
  @Input() public_id:any;
  @Output() reload = new EventEmitter();
  body = {
    token: localStorage.getItem('token'),
    comment: '',
    public_id: ''
  }

  constructor(private service:HomeService) { }

  ngOnInit(): void {
    this.body.public_id = this.public_id;
    this.sendComment();
  }

  sendComment(){
    this.service.comment(this.body).subscribe(data => {
      this.reload.emit(data.message);
    }, error => {console.log(error)});
  }
}
