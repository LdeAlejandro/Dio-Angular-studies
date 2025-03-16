import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  doLogin() {
    localStorage.setItem('token', '13ed1d12s12s12');
  }

  doLogout() {
    localStorage.clear();
  }

}
