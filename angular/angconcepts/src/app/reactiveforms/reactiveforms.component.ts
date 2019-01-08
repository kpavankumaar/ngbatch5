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

  ngOnInit() {
    this.customersInformation = new FormGroup({
      firstName:new FormControl('')
    })
  }

}
