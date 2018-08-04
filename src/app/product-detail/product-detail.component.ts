import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';
import {Order} from '../order';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  count: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private location: Location
  ) {
    this.count = 1;
  }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  addOrder(product: Product, count: number = 1): void {
    count = Math.min(count, product.available_quantity);
    const order: Order = new Order(product, count);
    this.cartService.addOrder(order);
  }

  // addOrder(id: number, count: number = 1): void {
  //   const order: Order = new Order();
  //   order.prod_id = id;
  //   order.quantity = Math.min(order.quantity + count, )
  // }

}
