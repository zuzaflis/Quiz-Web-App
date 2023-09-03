import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable()
export class AdminGuard {
  constructor(private storageService: StorageService, private router: Router){}

  canActivate(): boolean{
  if(this.storageService.isLoggedIn() && this.storageService.getUser().role == 'ADMIN'){
    return true;
  } else{
    this.router.navigate(["login"]);
  return false;
  }
}

}

export const adminGuard: CanActivateFn = (route, state) => {
  return inject(AdminGuard).canActivate();
};
