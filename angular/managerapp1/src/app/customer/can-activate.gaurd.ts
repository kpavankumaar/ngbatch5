import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { AuthService } from "../core/services/auth.service";


@Injectable()
export class CanActivateGaurd implements CanActivate {
    constructor(private router:Router, private authService: AuthService){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    //     if(true){
            
    //         return true;
    //     }
    //     this.router.navigate(['/login']);
    //     // return false;
    console.log('route',route);
    console.log('state',state);
    this.authService.redirectUrl = state.url;
    if(this.authService.logedIn){
        
        return true;
    }else{
        this.router.navigate(['/login']);
        return false
    }
    
    
    }
}