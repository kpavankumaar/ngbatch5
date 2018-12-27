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
  toggleColor(){
    this.color = this.color === 'lightgreen' ? 'lightgrey' : 'lightgreen';
  }
  changeColor(val){
    console.log(val);
    this.color = val;
  }
}
