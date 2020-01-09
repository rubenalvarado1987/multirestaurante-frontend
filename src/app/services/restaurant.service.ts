import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASEURL = 'http://ec2-18-231-197-224.sa-east-1.compute.amazonaws.com/api/chatapp';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  addRestaurant(body): Observable<any>{
    console.log(body);
    return this.http.post(`${BASEURL}/restaurant/add-new-restaurant` , body);
  }

  GetAllRestaurants(): Observable<any>{
    return this.http.get(`${BASEURL}/all-restaurants`);
  }

  getRestaurant(id): Observable<any>{
    return this.http.get(`${BASEURL}/restaurant/${id}`);
  }

  editRestaurant(body): Observable<any>{
    console.log(body);
    return this.http.post(`${BASEURL}/restaurant/edit-restaurant` , body);
  }

  

  DeleteRestaurant(id): Observable<any>{
    return this.http.post(`${BASEURL}/delete-restaurant/${id}`, {
      id,
    });
  }

}
