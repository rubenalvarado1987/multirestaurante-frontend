import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASEURL = 'http://ec2-18-231-197-224.sa-east-1.compute.amazonaws.com/api/chatapp';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  GetAllUser(): Observable<any>{
    return this.http.get(`${BASEURL}/users`);
  }

  GetUserById(id): Observable<any>{
    return this.http.get(`${BASEURL}/user/${id}`);
  }

  GetUserByName(username): Observable<any>{
    return this.http.get(`${BASEURL}/username/${username}`);
  }

  FollowUser(userFollowed): Observable<any>{
      return this.http.post(`${BASEURL}/follow-user`,{
        userFollowed
      });
  }

  UnFollowUser(userFollowed): Observable<any>{
    return this.http.post(`${BASEURL}/unfollow-user`,{
      userFollowed
    });
  }

  MarkNotification(id, deleteValue?): Observable<any>{
    return this.http.post(`${BASEURL}/mark/${id}`, {
      id,
      deleteValue
    });
  }

  MarkAllAsRead(): Observable<any>{
    return this.http.post(`${BASEURL}/mark-all`, {
      all: true
    });
  }

  AddImage(image) : Observable<any>{
    return this.http.post(`${BASEURL}/upload-image`, {
      image
    });
  }

  SetDefaultImage(imageId, imageVersion): Observable<any>{
    return this.http.get(`${BASEURL}/set-default-image/${imageId}/${imageVersion}`);
  }

  ProfileNotifications(id): Observable<any>{
    return this.http.post(`${BASEURL}/user/view-profile`, {id});
  }

  ChangePassword(body): Observable<any>{
    return this.http.post(`${BASEURL}/change-password` , body);
  }
}
