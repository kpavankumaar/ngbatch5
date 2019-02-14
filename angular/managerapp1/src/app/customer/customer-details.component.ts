import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  providers:[DataService]
})
export class CustomerDetailsComponent implements OnInit {
  customer;
  constructor(private dataService:DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute.params);
    let id ;
    this.activatedRoute.parent.params.subscribe(
      (params) =>{
        console.log(params);
        id = params['id'];
      },
      (err)=> {console.log(err)},
      ()=> {console.log('completed')}
    )
    this.dataService.getCustomerData(id).subscribe((customer)=>{
      this.customer = customer;
    })
  }

}
