import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyCartService } from './my-cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css'],
})
export class MyCartComponent implements OnInit {
  cartItem = [];
  showEdit = false;
  productToUpdate;

  constructor(private router: Router, private mycartService: MyCartService) {}

  ngOnInit(): void {
    this.cartItem = this.mycartService.getMyCart();
  }

  productToDelete(data) {
    this.cartItem = this.mycartService.productDeletedFromCart(data);
  }

  increment(item) {
    item.quantity += 1;
    this.mycartService.incrementQuantity(this.cartItem);
  }

  decrement(item) {
    if (item.quantity <= 1) item.quantity = 1;
    else item.quantity -= 1;
    this.mycartService.decrementQuantity(this.cartItem);
  }

  editModel(item) {
    this.productToUpdate = item;
    this.showEdit = !this.showEdit;
  }

  updatedName(data) {
    this.mycartService.updateMyCart(this.cartItem);
  }

  onClick() {
    this.router.navigate(['/product-list']);
  }
  CanDeactivate(){
    const confirmResult = confirm(
      'Are you sure you want to leave this page ? '
    );
    if ( confirmResult === true) {
      return true;
    } else {
      return false;
    } 
  }

}
