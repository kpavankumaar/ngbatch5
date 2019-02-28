import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [ CommonModule , RouterModule ],
  declarations: [NavbarComponent],
  exports: [ NavbarComponent ],
  providers: [ AuthService ]

})
export class CoreModule {
  constructor(){
    console.log("came to core module");
  }
 }
