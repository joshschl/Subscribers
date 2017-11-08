import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';

import { SubscriberService } from '../../services/subscriber.service';
import { Subscriber } from '../../models/subscriber.model'

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SubscribersComponent implements OnInit {

  editableText: String = 'what is up';
  subscribers: Subscriber[];

  saveEditable(value) {
    //call to http service
    console.log(value);
  }

  //new subscriber
  subscriber: Subscriber = new Subscriber();

  add(subscriber : Subscriber): void {
    this.subscriberService.createSubscriber(subscriber)
      .subscribe(subscriber => {
        this.subscribers.push(subscriber);
        
        //clear subscriber
        this.subscriber = new Subscriber();
      });
  };

  del(subscriber : Subscriber): void {
    this.subscriberService.deleteSubscriber(subscriber)
      .subscribe(() => {
        this.subscribers = this.subscribers.filter(sub => sub._id !== subscriber._id);
      });
  };

  //table 
  @ViewChild('SubscriberTable') table: any;

  //table callbacks
  toggleExpandRow(row): void {
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

  getSubscribers(): void {
    this.subscriberService.getSubscribers()
        .subscribe(subscribers => this.subscribers = subscribers)
  }

  constructor(private subscriberService: SubscriberService) { }

  ngOnInit() {
    //fetch subscribers
    this.getSubscribers();
  }

}