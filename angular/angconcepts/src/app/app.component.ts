import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<h2> welcome to {{title}} </h2>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  color = 'lightgreen';
  srcPath = './favicon.ico';
  username = 'krishna';
  firstName;
  lastName;
  num = 0;
  city = '';
  phoneNumber = 988889000;
  streetBlurDetails() {

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
