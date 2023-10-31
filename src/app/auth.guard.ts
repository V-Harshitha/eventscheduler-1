
 
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Implement your authentication check here.
    const isAuthenticated = true; // Replace with actual authentication check.

    if (isAuthenticated) {
      return true;
    } else {
      // Redirect to the login page if not authenticated.
      this.router.navigate(['/login']);
      return false;
    }
  }
}
