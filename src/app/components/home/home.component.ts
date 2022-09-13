import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  values:any;
  body = {
    token:localStorage.getItem('token'),
    sort:<any>'date',
    from: 0,
    to: 100
  }
  errors:any = [];
  mode:any;
  comments:any = [];
  post_comment = '';
  comment_status:boolean = false;

  constructor(private service:HomeService) { }

  ngOnInit(): void {
    this.service.GetData(this.body).subscribe(data => {
      this.values = data.values;
    },error => {this.errors.push(error)});
  }

  selectOption(option:any){
    this.body.sort = option;
    this.service.GetData(this.body).subscribe(data => {
      this.values = data.values;
    },error => {this.errors.push(error)});
  }

  errorHandler(e:any){
    this.errors.push(e);
  }

  controlMode(e:any){
    this.mode = e;
  }

  commentsHandler(e:any){
    this.comments = e.comments;
    this.post_comment = e.post;
    this.comment_status = true;
  }

  reloadComment(e:any){
    console.log(e);
    this.comments.push(e);
  }
}