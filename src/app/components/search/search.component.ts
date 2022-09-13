import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  body = {
    token: localStorage.getItem('token'),
    reg: ''
  }
  postBody = {
    token: localStorage.getItem('token'),
    _id: ''
  }
  results:any;
  user = [];
  post = [];
  status:boolean = false;
  errors = [];
  postsValues:any;

  constructor(private service:HomeService) { }

  ngOnInit(): void {
  }

  search(){
    this.service.searchProfile(this.body).subscribe(data => {
      this.results = data.result;
    },error => {console.log(error)});
  }

  watchAccount(user:any){
    this.user = user;
    this.postBody._id = user._id;
    this.service.searchPosts(this.postBody).subscribe(data => {
      this.postsValues = data.values;
    },error => {console.log(error)});
  }

  watchPost(e:any){
    this.post = e;
    this.status = true;
  }

  close(e:any){
    this.status = e;
    this.post = [];
  }
}
