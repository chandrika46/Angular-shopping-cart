import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ProductsComponent } from './products/products.component';
import { MyCartComponent } from './mycart/my-cart.component';
import { ProductListComponent } from './productlist/product-list.component';
import { OverAllTotalPipe } from './mycart/over-all-total.pipe';
import { MyCartService } from './mycart/my-cart.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthService } from './auth.service';
import { ExitMycartGuard } from './exit-mycart.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    MyCartComponent,
    ProductListComponent,
    OverAllTotalPipe,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    MyCartService,
    AuthGuard,
    AuthService,
    ExitMycartGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
