import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { MyCartService } from '../mycart/my-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products: any = [];

  constructor(
    private productsService: ProductsService,
    private mycartService: MyCartService
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((item) => {
      this.products = item;
    });
  }

  sendToService(id: number) {
    this.products.map((product) => {
      if (product.id === id ){
        this.mycartService.addTOCart(product);
      } 
    })
  }

}
