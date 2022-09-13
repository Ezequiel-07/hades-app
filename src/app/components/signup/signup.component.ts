import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  body = {
    name: '',
    nickname: '',
    email: '',
    password: '',
    phone: '',
    roles: '62ef5126b8a11bb82d957b3e'
  }
  statusN:boolean = false;
  statusE:boolean = false;

  constructor(private service:AuthService, private Pservice:ProfileService) { }

  ngOnInit(): void {
  }

  verifyNickname(){
    this.Pservice.verifyNickname(this.body.nickname).subscribe(data => {
      this.statusN = data.value;
    }, error => {console.log(error)});
  }
  verifyEmail(){
    this.Pservice.verifyEmail(this.body.email).subscribe(data => {
      this.statusE = data.value;
    }, error => {console.log(error)});
  }

  signup(){
    this.service.Signup(this.body).subscribe(data => {
      console.log(data);
      localStorage.setItem('token', data.token);
      window.location.href = '/home'
    }, error => {console.log(error)});
  }
}
