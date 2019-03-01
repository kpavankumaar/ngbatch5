import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { CustomerEditComponent } from "./customer-edit.component";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class CanDeactivateGaurd implements CanDeactivate<CustomerEditComponent>{
    canDeactivate(component:CustomerEditComponent,
        route:ActivatedRouteSnapshot, 
        state:RouterStateSnapshot): boolean{
        return component.canDeactivate()
    }
    
}