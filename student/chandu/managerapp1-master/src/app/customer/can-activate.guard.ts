
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot,CanActivate } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class CanActivateGaurd implements CanActivate {

    constructor(private router:Router,private authService: AuthService){}

    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
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