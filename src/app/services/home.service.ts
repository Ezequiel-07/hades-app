import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  URL:String = 'https://shy-teal-snapper-wear.cyclic.app/api'

  constructor(private http: HttpClient) { }

  GetData(body:any){
    return this.http.post<any>(this.URL + '/getDataForHome', body);
  }
  VerifyLike(body:any){
    return this.http.post<any>(this.URL + '/verifyLikes', body);
  }
  SendLike(body:any){
    return this.http.post<any>(this.URL + '/likes', body);
  }
  RemoveLike(body:any){
    return this.http.post<any>(this.URL + '/dislike', body);
  }
  publishPost(body:any, file:any){
    const formData = new FormData();
    formData.append('token', body.token);
    formData.append('comment', body.comment);
    formData.append('file', file);
    return this.http.post<any>(this.URL + '/publish', formData);
  }
  publishVideo(body:any, file:any){
    const formData = new FormData();
    formData.append('token', body.token);
    formData.append('comment', body.comment);
    formData.append('file', file);
    return this.http.post<any>(this.URL + '/publish/video', formData);
  }
  searchProfile(body:any){
    return this.http.post<any>(this.URL + '/search', body);
  }
  searchPosts(body:any){
    return this.http.post<any>(this.URL + '/userPost', body);
  }
  getComments(body:any){
    return this.http.post<any>(this.URL + '/getComments', body);
  }
  comment(body:any){
    return this.http.post<any>(this.URL + '/comment', body);
  }
}
