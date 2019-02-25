import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { AuthService } from "../core/services/auth.service";


@Injectable()
export class CanActivateGaurd implements CanActivate {
    constructor(private router:Router, private authService: AuthService,private activatedRoute : ActivatedRoute){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        if(this.authService.logedIn){
            console.log('return true');
            return true;
        }
        console.log('return false')
        // maintain the current url ... ie '/customers/1/edit' in authService.redirectUrl
        this.authService.redirectUrl = state.url; // '/customers/id/edit'
        this.router.navigate(['/login']);
        return false
    }
}