import { Component, ViewEncapsulation, ViewChild, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SubscriberService } from '../../services/subscriber.service';
import { Subscriber } from '../../models/subscriber.model'

@Component({
  selector: 'app-subscriber-edit',
  templateUrl: './subscriber-edit.component.html',
  styleUrls: ['./subscriber-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SubscriberEditComponent implements OnInit {

  subscriber: Subscriber;

  save(subscriber : Subscriber): void {
    this.subscriberService.updateSubscriber(subscriber)
      .subscribe(() => this.goBack());
  };

  getSubscriber(): void {
    //retrieve id from route url
    const id = this.route.snapshot.paramMap.get('id');

    this.subscriberService.getSubscriber(id)
        .subscribe(subscriber => this.subscriber = subscriber)
  }

  //go back to previous page
  goBack(): void {
    this.location.back();
  }

  constructor(
    private subscriberService: SubscriberService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //fetch subscribers
    this.getSubscriber();
  }

}