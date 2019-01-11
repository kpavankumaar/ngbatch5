import { Component, Input, OnChanges, Directive } from '@angular/core';
// @Directive({
//   selector: 'ngModel',
  
// })
// class NgModel {
//   constructor(ngForm) {
    
//   }
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<h2> welcome to {{title}} </h2>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Angular';
  color = 'lightgreen';
  srcPath = './favicon.ico';
  username = 'krishna';
  firstName;
  lastName;
  num = 0;
  city = 'Hyderabad';
  phoneNumber = 988889000;
  @Input('cityDetails') cityDetail;
  
  streetBlurDetails(val) {

  }
  updateCity(val){
    this.city = val;
    console.log(val);
  }
  streetDetails(val) {
    console.log(val);
  }
  updatePhoneDetails(val: number) {
    console.log(val);
  }
  toggleColor() {
    this.color = this.color === 'lightgreen' ? 'lightgrey' : 'lightgreen';
  }
  firstNameDetails(val: string) {
    this.firstName = val;
  }
  lastNameDetails(val: string) {
    this.lastName = val;
  }
  changeColor(val) {
    console.log(val);
    this.color = val;
  }
}
