import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-posts-preview',
  templateUrl: './posts-preview.component.html',
  styleUrls: ['./posts-preview.component.css']
})
export class PostsPreviewComponent implements OnInit {
  @Input() post:any;
  @Output() eventClose = new EventEmitter();
  status = false;
  comments:any = [];
  post_comment = '';
  comment_status:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.eventClose.emit(false);
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
