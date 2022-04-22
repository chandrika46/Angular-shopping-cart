import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';
import { LoginFormComponent } from './login-form.component';
import { Router } from '@angular/router';
import { ProductListComponent } from '../productlist/product-list.component';
import { Location } from '@angular/common';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'product-list', component: ProductListComponent },
        ]),
        ReactiveFormsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name field validity', () => {
    let name = component.loginForm.controls['userName'];
    expect(name.valid).toBeFalsy();

    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();
  });

  it('password field validity', () => {
    let password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();

    password.setValue('');
    expect(password.hasError('required')).toBeTruthy();

    password.setValue('asas');
    expect(password.valid).toBeTruthy();

    password.setValue('asassdasd');
    expect(password.valid).toBeFalsy();
  });

  it('when click on login it navigates to productlist', async(
    inject([Router, Location], (router: Router, location: Location) => {
      let fixture = TestBed.createComponent(LoginFormComponent);
      fixture.detectChanges();
      router.navigate(['product-list']).then(() => {
        expect(location.path()).toEqual('/product-list');
      });
    })
  ));
});
