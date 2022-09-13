import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-modify-name',
  templateUrl: './modify-name.component.html',
  styleUrls: ['./modify-name.component.css']
})
export class ModifyNameComponent implements OnInit {
  @Input() name:any;
  body = {
    token: localStorage.getItem('token'),
    newName: ''
  }

  constructor(private service:ProfileService) { }

  ngOnInit(): void {
    this.body.newName = this.name;
  }

  update(){
    this.service.updateName(this.body).subscribe(data => {
      console.log(data);
      window.location.reload();
    }, error => {console.log(error)});
  }

}
