import { Injectable } from '@angular/core';

@Injectable()
export class MyCartService {
  cartValue = 'cartValue';
  constructor() {}

  addTOCart(product) {
    let myCartProduct = JSON.parse(localStorage.getItem(this.cartValue)) || [];
    let itemPresent = myCartProduct.map((item) => {
      if (item.name == product.name) {
        return item.name;
      }
    });
    if (product && !itemPresent.includes(product.name)) {
      myCartProduct.push(product);
      localStorage.setItem(this.cartValue, JSON.stringify(myCartProduct));
    }
  }

  incrementQuantity(item): any {
    let incrementProduct = JSON.parse(localStorage.getItem(this.cartValue));
    localStorage.setItem(this.cartValue, JSON.stringify(item));
    return incrementProduct;
  }

  decrementQuantity(item): any {
    let decrementProduct = JSON.parse(localStorage.getItem(this.cartValue));
    localStorage.setItem(this.cartValue, JSON.stringify(item));
    return decrementProduct;
  }

  productDeletedFromCart(value) {
    let deleteProduct = JSON.parse(localStorage.getItem(this.cartValue));
    let deleteditem = deleteProduct.filter((item) => item.id !== value);
    deleteProduct = deleteditem;
    localStorage.setItem(this.cartValue, JSON.stringify(deleteProduct));
    return deleteProduct;
  }

  updateMyCart(UpdatedData){
    let updatedValue = JSON.parse(localStorage.getItem(this.cartValue));
    localStorage.setItem(this.cartValue, JSON.stringify(UpdatedData));
  }

  getMyCart() {
    return JSON.parse(localStorage.getItem(this.cartValue));
  }
}
