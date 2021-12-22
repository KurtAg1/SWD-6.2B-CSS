import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class ProductDetailGuardService implements CanActivate{
    
    constructor(private router: Router){
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        const id = +route.paramMap.get('id');
        
        if(isNaN(id) || id < 1){
            alert('Invalid product id');
            this.router.navigate(['/products']);
            return false;
        }
        return true;
    }
}