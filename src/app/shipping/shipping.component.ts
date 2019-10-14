import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
shippingCost;
  constructor(private cartService: CartService, private http: HttpClient) { 
//this.shippingCost=this.cartService.getShippingPrices();
  }

  ngOnInit() {
//this.shippingCost=this.cartService.getShippingPrices();
this.shippingCost=this.http.get('assets/shipping.json');

  }


}