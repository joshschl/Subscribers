import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Subscriber } from '../models/subscriber.model'

@Injectable()
export class SubscriberService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  
  //TODO: catch errors
  getSubscribers(): Observable<Subscriber[]> {
    return this.http.get<Subscriber[]>('/api/subscribers');
  }

  createSubscriber(subscriber : Subscriber): Observable<Subscriber> {
    return this.http.post<Subscriber>('/api/subscribers', subscriber, this.httpOptions);
  }

  getSubscriber(id : string): Observable<Subscriber> {
    return this.http.get<Subscriber>(`/api/subscribers/${id}`);
  }

  updateSubscriber(subscriber : Subscriber): Observable<Subscriber> {
    return this.http.put<Subscriber>(`/api/subscribers/${subscriber._id}`, subscriber, this.httpOptions);
  }

  deleteSubscriber(subscriber : Subscriber): Observable<any> {
    return this.http.delete(`/api/subscribers/${subscriber._id}`, this.httpOptions);
  }

}