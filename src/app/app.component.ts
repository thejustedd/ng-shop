import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orderCount: number;

  constructor(private cartService: CartService) {
    this.orderCount = this.cartService.getOrders().length;
    // this.cartService.getOrders()
    //   .subscribe(orders => this.orderCount = orders.length);
  }
}
