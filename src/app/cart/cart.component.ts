import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orders: Order[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.orders =  this.getOrders();
  }

  getOrders(): Order[] {
    return this.cartService.getOrders();
    // const orders = this.cartService.getOrders();
    // return orders ? orders : [];
      // .subscribe(orders => this.orders = orders);
  }

  deleteOrder(id: number) {
    this.orders = this.cartService.deleteOrder(id);
  }

  getTotalPrice(): number {
    let sum = 0;
    this.orders.forEach(order => sum += order.quantity * order.product.price);
    return sum;
  }

}
