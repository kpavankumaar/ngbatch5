import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  customersInformation:FormGroup;
  constructor() { }
  customersFormDetails(){
    console.log(this.customersInformation);
  }
  ngOnInit() {
    this.customersInformation = new FormGroup({
      firstName:new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      verify: new FormControl(true),
      rating: new FormControl(),
      notification: new FormControl('')
    })
  }

}
