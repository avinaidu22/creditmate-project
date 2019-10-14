import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {FormBuilder} from  '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items;
checkOutForm;
  constructor(private cartSer: CartService,private formBuilder: FormBuilder) { }

  ngOnInit() {
this.items=this.cartSer.getItems();
this.checkOutForm= this.formBuilder.group({
name:'',
address:''
  });
  }
clearComCart(custData){
     console.warn('Your order has been submitted', custData);

 // this.items=this.cartSer.clearCart();
  this.checkOutForm.reset();
}

}