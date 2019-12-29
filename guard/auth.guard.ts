import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SigningService } from '../services/signing.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authService: SigningService, public router: Router, private signing: SigningService) {
  }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // tslint:disable-next-line: no-shadowed-variable
    return this.authService.afAuth.authState.pipe(map(state => {
      if (state !== null && this.signing.isAdmin()) {
          return true;
      }
      this.router.navigate(['**']);
      return false;
    }));
  }

}
