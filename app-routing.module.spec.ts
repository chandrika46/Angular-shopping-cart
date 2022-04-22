import { LoginFormComponent } from './login-form/login-form.component';
import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { HeaderComponent } from 'src/shared/header/header.component';
import { ProductListComponent } from './productlist/product-list.component';
import { MyCartComponent } from './mycart/my-cart.component';

describe('AppRoutingModelTest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path:'',redirectTo:'login',pathMatch:"full"},
          { path: 'login', component:LoginFormComponent },
          { path: 'product-list', component: ProductListComponent },
          { path: 'mycart', component: MyCartComponent },
        ]),
      ],
      declarations: [ProductListComponent, MyCartComponent,LoginFormComponent],
    }).compileComponents();
  });
  it("onClick of 'product-list' navigate to ProductListComponent", async(
    inject([Router, Location], (router: Router, location: Location) => {
      let fixture = TestBed.createComponent(HeaderComponent);
      fixture.detectChanges();
      router.navigate(['product-list']).then(() => {
        expect(location.path()).toEqual('/product-list');
      });
    })
  ));

  it("onClick of 'mycart' navigate to MyCartComponent", async(
    inject([Router, Location], (router: Router, location: Location) => {
      let fixture = TestBed.createComponent(HeaderComponent);
      fixture.detectChanges();
      router.navigate(['mycart']).then(() => {
        expect(location.path()).toEqual('/mycart');
      });
    })
  ));

  it('default link navigate to LoginFormComponent', async(
    inject([Router, Location], (router: Router, location: Location) => {
      let fixture = TestBed.createComponent(HeaderComponent);
      fixture.detectChanges();
      router.navigate(['']).then(() => {
        expect(location.path()).toBe('/login');
      });
    })
  ));

});
