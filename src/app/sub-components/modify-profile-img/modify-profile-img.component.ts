import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-modify-profile-img',
  templateUrl: './modify-profile-img.component.html',
  styleUrls: ['./modify-profile-img.component.css']
})
export class ModifyProfileImgComponent implements OnInit {
  @Input() Url:any;
  body = {
    token: localStorage.getItem('token')
  }
  file:any;
  preview:any;

  constructor(private service:ProfileService) { }

  ngOnInit(): void {
  }

  updateFile(e:any){
    if(e.target.files[0]){
      this.file = e.target.files[0];

      let reader = new FileReader();
      reader.onload = e => this.preview = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  update(){
    this.service.updateProfileImg(this.body, this.file).subscribe(data => {
      console.log(data);
    }, error => {console.log(error)});
  }
}
