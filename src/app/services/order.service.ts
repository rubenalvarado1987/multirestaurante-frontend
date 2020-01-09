import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASEURL = 'http://ec2-18-231-197-224.sa-east-1.compute.amazonaws.com/api/chatapp';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(public http: HttpClient) {
    console.log('Hello OrderProvider Provider');
  }

  addOrder(body): Observable<any>{
    console.log(body);
    return this.http.post(`${BASEURL}/order/add-new-order` , body);
  }

  GetOrdersByUser(id): Observable<any>{
    return this.http.get(`${BASEURL}/orders-user/${id}`);
  }

  GetAllOrders(): Observable<any>{
    return this.http.get(`${BASEURL}/orders-all`);
  }

  getOrder(id): Observable<any>{
    return this.http.get(`${BASEURL}/get-order/${id}`);
  }

  updateStatus(body): Observable<any>{
    console.log(body);
    return this.http.post(`${BASEURL}/order/update-status` , body);
  }

}
