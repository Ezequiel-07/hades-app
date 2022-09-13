import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-modify-nickname',
  templateUrl: './modify-nickname.component.html',
  styleUrls: ['./modify-nickname.component.css']
})
export class ModifyNicknameComponent implements OnInit {
  @Input() nickname:any;
  body = {
    token: localStorage.getItem('token'),
    newNickname: '',
    currentNickname: ''
  }
  status:boolean = true; 

  constructor(private service:ProfileService) { }

  ngOnInit(): void {
    this.body.newNickname = this.nickname;
  }

  update(){
    this.body.currentNickname = this.nickname;
    this.service.updateNickname(this.body).subscribe(data => {
      console.log(data);
      window.location.reload();
    }, error => {console.log(error)});
  }

  verify(){
    this.service.verifyNickname(this.body.newNickname).subscribe(data => {
      this.status = data.value;
    }, error => {console.log(error)});
  }
}
