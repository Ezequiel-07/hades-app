import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  URL:String = 'https://shy-teal-snapper-wear.cyclic.app/api'

  constructor(private http:HttpClient) { }

  getUser(body:any){
    return this.http.post<any>(this.URL + '/getUser', body);
  }
  verifyNickname(nickname:any){
    let body = {nickname:nickname};
    return this.http.post<any>(this.URL + '/verifyNickname', body);
  }
  verifyEmail(email:any){
    let body = {email:email};
    return this.http.post<any>(this.URL + '/verifyEmail', body);
  }
  updateNickname(body:any){
    return this.http.post<any>(this.URL + '/updateNickname', body);
  }
  updateName(body:any){
    return this.http.post<any>(this.URL + '/updateName', body);
  }
  updateProfileImg(body:any, file:any){
    const formData = new FormData();
    formData.append('file', file);
    formData.append('token', body.token);
    return this.http.post<any>(this.URL + '/updateProfileImg', formData);
  }
  updateDescription(body:any){
    return this.http.post<any>(this.URL + '/updateDescription', body);
  }
  deletePost(body:any){
    return this.http.post<any>(this.URL + '/delete/post', body);
  }
  verifyFollow(body:any){
    return this.http.post<any>(this.URL + '/verifyFollow', body);
  }
  verifyBlock(body:any){
    return this.http.post<any>(this.URL + '/verifyBlock', body);
  }
  follow(body:any){
    return this.http.post<any>(this.URL + '/follow', body);
  }
  unfollow(body:any){
    return this.http.post<any>(this.URL + '/unfollow', body);
  }
  block(body:any){
    return this.http.post<any>(this.URL + '/block', body);
  }
  unlock(body:any){
    return this.http.post<any>(this.URL + '/unlock', body);
  }
}
