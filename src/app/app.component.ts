import { Component } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orderCount: number;

  constructor(private orderService: OrderService) {
    this.orderService.getOrders()
      .subscribe(orders => this.orderCount = orders.length);
  }
}
