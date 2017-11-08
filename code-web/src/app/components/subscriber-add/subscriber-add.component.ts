import { Component, ViewEncapsulation, Output, EventEmitter, OnInit } from '@angular/core';

import { SubscriberService } from '../../services/subscriber.service';
import { Subscriber } from '../../models/subscriber.model';

@Component({
  selector: 'app-subscriber-add',
  templateUrl: './subscriber-add.component.html',
  styleUrls: ['./subscriber-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SubscriberAddComponent implements OnInit {

  //External Bindings
  @Output() add = new EventEmitter<Subscriber>()

  //initialize subscriber
  subscriber: Subscriber = new Subscriber();

  addSubscriber(): void {
    this.subscriberService.createSubscriber(this.subscriber)
      .subscribe(subscriber => {
        this.add.emit(subscriber); //emit event to binding
        
        //clear subscriber
        this.subscriber = new Subscriber();
      });
  };

  constructor(private subscriberService: SubscriberService) { }

  ngOnInit() { }

}