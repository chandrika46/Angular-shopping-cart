import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MyCartComponent } from './mycart/my-cart.component';

@Injectable({
  providedIn: 'root',
})
export class ExitMycartGuard implements CanDeactivate<MyCartComponent> {
  canDeactivate(
    component: MyCartComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.CanDeactivate ? component.CanDeactivate() : true;
  }
}