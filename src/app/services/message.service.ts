import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASEURL = 'http://ec2-18-231-197-224.sa-east-1.compute.amazonaws.com/api/chatapp';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) {
  }

  SendMessage(senderId, receiverId, receiverName , message): Observable<any>{
    return this.http.post(`${BASEURL}/chat-messages/${senderId}/${receiverId}`, {
      receiverId,
      receiverName,
      message
    });
  }

  GetAllMessages(senderId, receiverId): Observable<any>{
    return this.http.get(`${BASEURL}/chat-messages/${senderId}/${receiverId}`);
  }

  MarkMessages(sender, receiver): Observable<any>{
    return this.http.get(`${BASEURL}/receiver-messages/${sender}/${receiver}`)
  }

  MarkAllMessages(): Observable<any>{
    return this.http.get(`${BASEURL}/mark-all-messages`);
  }
}
