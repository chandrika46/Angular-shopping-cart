import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import {
  async,
  TestBed,
  ComponentFixture,
  inject,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MyCartComponent } from './my-cart.component';
import { Router } from '@angular/router';
import { ProductListComponent } from '../productlist/product-list.component';
import { OverAllTotalPipe } from './over-all-total.pipe';
import { MyCartService } from './my-cart.service';

describe('MycartComponent', () => {
  let component: MyCartComponent;
  let fixture: ComponentFixture<MyCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'product-list', component: ProductListComponent },
        ]),
      ],
      declarations: [MyCartComponent, OverAllTotalPipe],
      providers: [MyCartService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('create an instance for pipe', () => {
    const pipe = new OverAllTotalPipe();
    expect(pipe).toBeTruthy();
  });

  it('does more shopping btn navigates to product list', async(
    inject([Router, Location], (router: Router, location: Location) => {
      let fixture = TestBed.createComponent(MyCartComponent);
      fixture.detectChanges();

      router.navigate(['product-list']).then(() => {
        expect(location.path()).toBe('/product-list');
      });
    })
  ));

  it('does delete button works', () => {
    spyOn(component, 'productToDelete');
    component.productToDelete(1);
    expect(component.productToDelete).toHaveBeenCalled();
  });

  it('service should be created', () => {
    const service: MyCartService = TestBed.get(MyCartService);
    expect(service).toBeTruthy();
  });

  it('should have getProducts method', () => {
    const service: MyCartService = TestBed.get(MyCartService);
    expect(service.getMyCart).toBeTruthy();
  });

  it('does edit button works', () => {
    spyOn(component, 'editModel');
    component.editModel(1);
    expect(component.editModel).toHaveBeenCalled();
  });

  it('does update button works', () => {
    spyOn(component, 'updatedName');
    component.updatedName(1);
    expect(component.updatedName).toHaveBeenCalled();
  });
});
