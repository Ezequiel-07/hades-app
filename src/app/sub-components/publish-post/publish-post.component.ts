import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-publish-post',
  templateUrl: './publish-post.component.html',
  styleUrls: ['./publish-post.component.css']
})
export class PublishPostComponent implements OnInit {
  @Output() event = new EventEmitter;
  body = {
    comment: '',
    token: localStorage.getItem('token')
  }
  file:any;
  preview:any;
  status:boolean = false;

  constructor(private service:HomeService) { }

  ngOnInit(): void {
  }

  getFile(e:any){
    if(e.target.files.length > 0) {
      this.file = e.target.files[0];

      let reader = new FileReader();
      reader.onload = e => this.preview = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  close(){
    this.event.emit('close');
  }

  sendForm(){
    this.status = true;
    this.service.publishPost(this.body, this.file).subscribe(data => {
      console.log(data);
      window.location.reload();
    },error => {console.log(error)});
  }
}
