import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductdetailGuard implements CanActivate {
  id:number;
  constructor(private router:Router) {
  }
  canActivate(routerSnapShot:ActivatedRouteSnapshot):boolean{
    this.id=+routerSnapShot.url[1];
    if(isNaN(this.id) || this.id<0 || this.id>3){
      alert('invalid id');
      this.router.navigate(['/products']);
      return false;
    }else{
      return true;
    }
  }
}