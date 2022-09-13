import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  body = {
    token: localStorage.getItem('token')
  }
  description = {
    token: localStorage.getItem('token'),
    description: ''
  }
  user:any = '';
  status:boolean = false;
  Pstatus:boolean = false;
  post:any;
  deleteStatus:any;
  modifyTextarea:boolean = false;
  alertTextarea:boolean = false;
  key:any;
  deleteBody = {
    token: localStorage.getItem('token'),
    id:''
  }

  constructor(private service:ProfileService) { }

  ngOnInit(): void {
    this.service.getUser(this.body).subscribe(data => {
      this.user = data.user;
      this.description.description = data.user.description;
    },error => {console.log(error)});
  }

  editProfile(){
    this.status = true;
  }

  closeEdit(){
    this.status = false;
  }

  alert(){
    this.alertTextarea = true;
  }

  noModify(){
    this.alertTextarea = false;
  }

  modify(){
    this.modifyTextarea = true;
    this.alertTextarea = false;
  }

  saveChanges(){
    this.service.updateDescription(this.description).subscribe(data => {
      console.log(data);
      this.modifyTextarea = false;
    }, error => {console.log(error)});
  }

  watchPost(e:any){
    this.post = e;
    this.Pstatus = true;
  }

  close(e:any){
    this.Pstatus = e;
    this.post = [];
  }

  deleteConfirm(e:any){
    this.deleteStatus = true;
    this.deleteBody.id = e._id;
  }

  cancel(){
    this.deleteStatus = false;
    this.deleteBody.id = '';
  }

  delete(){
    this.service.deletePost(this.deleteBody).subscribe(data => {
      console.log(data);
      window.location.reload();
    }, error => {console.log(error)});
  }
}