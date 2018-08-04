import {Injectable} from '@angular/core';
import {Order} from './order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() {
  }

  getOrders(): Order[] {
    const str = localStorage.getItem('orders');
    return str ? JSON.parse(str) : <Order[]>[];
  }

  addOrder(order: Order): Order[] {
    const str = localStorage.getItem(('orders'));
    let orders: Order[] = <Order[]>[];

    if (str) {
      orders = JSON.parse(str);

      const index = orders.findIndex(item => item.product.id === order.product.id);

      if (index !== -1) {
        orders[index].quantity = Math.min(orders[index].quantity + order.quantity, order.product.available_quantity);
      } else {
        orders.push(order);
      }

    } else {
      orders.push(order);
    }

    localStorage.setItem('orders', JSON.stringify(orders));
    return orders;
  }

  deleteOrder(id: number): Order[] {
    const str = localStorage.getItem('orders');

    if (str) {
      const orders: Order[] = JSON.parse(str);

      for (let i = 0; i < orders.length; i++) {
        if (orders[i].product.id === id) {
          orders.splice(i, 1);
          localStorage.setItem('orders', JSON.stringify(orders));
          break;
        }
      }

      return orders;
    }
  }

}
