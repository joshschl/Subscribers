import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

import { Subscriber } from '../../models/subscriber.model';

@Component({
  selector: 'app-subscribers-row-detail',
  templateUrl: './subscribers-row-detail.component.html',
  styleUrls: ['./subscribers-row-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SubscribersRowDetailComponent implements OnInit {

  @Input() subscriber: Subscriber;

  constructor() { }

  ngOnInit() { }

}
