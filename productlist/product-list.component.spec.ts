import { MyCartService } from './../mycart/my-cart.service';
import { RouterTestingModule } from '@angular/router/testing';
import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { ProductListComponent } from './product-list.component';
import { MyCartComponent } from '../mycart/my-cart.component';

describe('ProductlistComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  const jsonProduct: any = require('../../assets/products.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent, MyCartComponent],
      providers:[MyCartService],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'mycart', component: MyCartComponent },
        ]),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('expect the HTTP method to be GET', inject(
    [HttpTestingController],
    (httpMock: HttpTestingController) => {
      const req = httpMock.expectOne('../../assets/products.json');
      expect(req.request.method).toEqual('GET');
    }
  ));

  it('does Add to cart button navigate to MyCart Component', async(
    inject([Router, Location], (router: Router, location: Location) => {
      let fixture = TestBed.createComponent(ProductListComponent);
      fixture.detectChanges();

      router.navigate(['mycart']).then(() => {
        expect(location.path()).toBe('/mycart');
      });
    })
  ));

  it('service should be created', () => {
    const service: MyCartService = TestBed.get(MyCartService);
    expect(service).toBeTruthy();
  });

});
