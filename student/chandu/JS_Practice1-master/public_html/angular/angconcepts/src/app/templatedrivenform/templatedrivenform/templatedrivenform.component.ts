import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.scss']
})
export class TemplatedrivenformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginDetails(formDetails){
    console.log(formDetails);
  }

}
