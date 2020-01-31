import { auth } from 'firebase/app';
import { map, take, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private afsAuth: AngularFireAuth, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      return this.afsAuth.authState
      .pipe(take(1))
      .pipe(map(authState => !!authState))
      // tslint:disable-next-line: no-shadowed-variable
      .pipe(tap(auth => {
        if (!auth) {
          this.router.navigate(['/user/login']);
        }
      }));
  }

}
