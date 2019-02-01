import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  dataFromParent = [1,2,3,4];
  constructor() { }

  ngOnInit() {
  }

}
