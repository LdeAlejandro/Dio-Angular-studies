import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, /*Router, para redirecionar a outra pagina em caso de false*/ RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // constructor(private router: Router) {} para redirecionar a outra pagina em caso de false
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const hasToken = !!localStorage.getItem('token');
      console.log(hasToken);

      //return hasToken ? true : (this.router.navigate(['/login']), false); para redirecionar a outra pagina em caso de false

      return hasToken ? true : false;
  }
  
}
