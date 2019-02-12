import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs';


@Injectable()
export class CanActivateGaurd implements CanActivate {
    constructor(private router:Router){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean> | boolean{
        if(false){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

}