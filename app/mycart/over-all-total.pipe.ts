import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overAllTotal',
  pure: false,
})
export class OverAllTotalPipe implements PipeTransform {
  transform( products: any) {
    return this.overAllTotal(products);
  }

  overAllTotal( products) {
    if(!products)
    return 0;
    else{
    let sum = products.reduce((acc: number,item) => acc + item.quantity * item.price, 0);
    return sum;
    }
  }
}
