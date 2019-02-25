import { Component, OnInit } from '@angular/core';
import { IState, ICustomer } from '../core/interfaces';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})

export class CustomerEditComponent implements OnInit {
  
  customer:ICustomer = {
      id: 0,
      firstName: '',
      lastName: '',
      gender: '',
      address: '',
      city: '',
      state: {
        abbreviation: '',
        name: ''
      }
    };
  states: IState[];
  errorMessage: string;
  deleteMessageEnabled: boolean;
  operationText = 'Insert';
  url:string;
  id:number;
  constructor( private dataService : DataService, private activatedRouter:ActivatedRoute) {}

  ngOnInit() {
    console.log('this.activatedRouter',this.activatedRouter)

    this.activatedRouter.parent.params.subscribe((response) => {
      console.log("response",response.id);
      this.id = response.id;
    })
    // this.url = this.state.url
    // console.log("this.state url value ", this.state.url);
    this.dataService.getCustomerData(this.id).subscribe((res) => {
        console.log(res);
        this.customer.id = res.id;
        this.customer.firstName = res.firstName;
        this.customer.lastName = res.lastName;
        this.customer.gender = res.gender;
        this.customer.address = res.address;
        this.customer.city = res.city;
        this.customer.state.abbreviation = res.state.abbreviation;
        this.customer.state.name = res.state.name;
    })
  }
  submit(){
  }
  delete(){
  }
  cancel(){
  }
}
