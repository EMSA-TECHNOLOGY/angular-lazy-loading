import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('OrderDetailComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('OrderDetailComponent ngOnDestroy');
  }

}
