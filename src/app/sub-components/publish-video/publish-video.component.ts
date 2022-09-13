import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-publish-video',
  templateUrl: './publish-video.component.html',
  styleUrls: ['./publish-video.component.css']
})
export class PublishVideoComponent implements OnInit {
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
    this.service.publishVideo(this.body, this.file).subscribe(data => {
      console.log(data);
      window.location.reload();
    },error => {console.log(error)});
  }
}
