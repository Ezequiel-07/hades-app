import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  status:boolean = false;
  body = {
    token:localStorage.getItem("token")
  }

  constructor(private service:AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")){
      this.service.tokenVerify(this.body).subscribe(data=>{
        this.status = true;
      },error=>{
          console.log(error);
          localStorage.removeItem('token');
          this.reload();
      }
    )}else{
        this.reload();
    }}

  reload(){
      if(window.location.href == 'https://hades-app.vercel.app/signin' || window.location.href == 'https://hades-app.vercel.app/signup'){
        console.log('not loged');
      }else{
        window.location.href = '/signin';
      }
  }
}
