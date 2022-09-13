import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() _id:any;
  @Output() post = new EventEmitter();
  @Output() delete = new EventEmitter();
  body = {
    token: localStorage.getItem('token'),
    _id: ''
  }
  values:any;

  constructor(private service:HomeService) { }

  ngOnInit(): void {
    this.body._id = this._id;
    this.service.searchPosts(this.body).subscribe(data => {
      this.values = data.values;
    }, error => {console.log(error)});
  }

  preview(value:any){
    this.post.emit(value);
  }

  deleteAction(value:any){
    this.delete.emit(value);
  }
}
