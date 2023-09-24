import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  if (token) {
    if (state.url === '/auth/login' ){
      router.navigate(['system/dashboard']); 
    }
    return true;
  } else {
    router.navigate(['/auth/login']); 
    return false;
  }
};

export const AuthGuardLogin: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  if (!token) {
    return true;
  }
  router.navigate(['/system/dashboard']);
  return false
};
