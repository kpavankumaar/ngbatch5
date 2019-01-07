import { Component } from '@angular/core';

import {Input,OnChanges,Directive} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 3';
  color = 'lightgreen';
  username = "purna";
  FirstName;
  LastName;
  phoneNum;
  street;
  //city="Hyderabad";
  @Input("cityDetails") cityDetail;

  toggleColor(){
    this.color = this.color === 'lightgreen'?'yellow':'red';
  }

  changeColor(val){
    console.log(val);
    this.color = val;
  }

  firstNameDetails(val:string){
    console.log(val);
    this.FirstName = val;
  }

  lastNameDetails(val: string){
    console.log(val);
    this.LastName = val;
  }

  updatePhoneDetails(val: string){
    console.log(val);
    this.phoneNum = val;
  }

  streetBlurDetails(val:string){
    this.street = val;
  }

  // updateCity(val){
  //   this.city=val;
  //   console.log(val);
  // }

  
}
