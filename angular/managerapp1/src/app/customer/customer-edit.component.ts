import { Component, OnInit, ViewChild } from '@angular/core';
import { IState, ICustomer } from '../core/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../core/services/data.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})

export class CustomerEditComponent implements OnInit {
  @ViewChild('customerForm') customerForm: NgForm;
  
  customer: ICustomer = {
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
  url: string;
  id: number;
  constructor( private router: Router, private dataService : DataService, private activatedRouter: ActivatedRoute) {}

  ngOnInit() {
    console.log('this.activatedRouter', this.activatedRouter)

    this.activatedRouter.parent.params.subscribe((response) => {
      console.log("response", response.id);
      this.id = response.id;
    });
    // this.url = this.state.url
    // console.log("this.state url value ", this.state.url);

    // response from the  server to load the initial data of the customer
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
    // get states 
    this.dataService.getStatesData().subscribe((stateData) => {
      this.states = stateData;
    });
  }
  submit() {
    if (this.customer.id === 0) {
      this.dataService.insertCustomer(this.customer).subscribe((insertedCustomer) => {
        if (insertedCustomer) {
          console.log('add new customer to customers list ')
        } else {
          console.log('unable to upload the customers data');
        }
      });
    } else {
      this.dataService.updateCustomer(this.customer).subscribe((status: boolean) => {
          if (status) {
            console.log('updated the custmers details ')
            this.router.navigate(['/customers']);
          } else {
            console.log('error updating customer details ')
          }
      });
    }
  }
  // this method is called from canDeactivateGaurd
  canDeactivate(){
    // if value of atleast one field is changed then dirty is true so confirm with the user if he wants to leave the page
    if (this.customerForm.dirty){
      let response = confirm('are you willing to leave the page');
      if (response){
        return true;
      }else{
        return false;
      }
    }
    // allow the redirect to customers page
    return true;
  }
  delete() {
    this.dataService.deleteCustomerData(this.customer).subscribe((res) => {
      console.log('response');
    });
    this.router.navigate(['/customers']);
  }
  cancel(val){
    // redirecting the page and canDeactivate is trigered
      this.router.navigate(['/customers']);
  }
}
