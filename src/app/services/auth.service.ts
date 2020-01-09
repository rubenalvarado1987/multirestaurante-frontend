import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASEURL = 'http://ec2-18-231-197-224.sa-east-1.compute.amazonaws.com/api/chatapp';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(body): Observable<any>{
    return this.http.post(`${BASEURL}/register`,body);
  }

  loginUser(body): Observable<any>{
    return this.http.post(`${BASEURL}/login`,body);
  }
}
