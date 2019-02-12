import { Router, Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";
import { NgModule } from "@angular/core";

const route:Routes = [
    {path:'',component:LoginComponent}
]
@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})
export class RoutingModule{

}
