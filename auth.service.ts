import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  data;
  constructor(private route: Router) {}

  sendData(userData) {
    this.data = userData;
  }
  loggedIn() {
    if (this.data) {
      return true;
    } else {
      return false;
    }
  }
}
