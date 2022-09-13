import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  body = {
    nickname:'',
    email:'',
    password:''
  }
  status = {
    withEmail:false,
    withNickname:false
  }
  errors:any = [];

  constructor(private service:AuthService) { }

  ngOnInit(): void {
  }

  sendForm(){
    this.service.Signin(this.body).subscribe(data => {
      localStorage.setItem("token", data.token);
      window.location.href = "/";
   },error => {this.errors.push(error)});
  }

  withEmail(){
    if(this.status.withEmail == true){
      this.status.withEmail = false;
    }else{
      this.status.withEmail = true;
    }
  }

  withNickname(){
    if(this.status.withNickname == true){
      this.status.withNickname = false;
    }else{
      this.status.withNickname = true;
    }
  }
}
