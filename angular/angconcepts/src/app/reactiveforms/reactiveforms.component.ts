import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

function phoneValidator(val:boolean){
  if(val){
    return null;
  }
  return {
    match:true
  }
}
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
      firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastName: new FormControl('',[Validators.required,Validators.minLength(3)]),
      email: new FormControl('',[Validators.email]),
      phone: new FormControl(''),
      verify: new FormControl(true),
      rating: new FormControl(),
      notification: new FormControl('')
    })
  }
  setNotification(notify:string){
    const phone = this.customersInformation.get('phone');
    if(notify === 'text'){
      phone.setValidators([Validators.required,Validators.minLength(10),Validators.maxLength(10)]);
    }else{
      phone.clearValidators();
    }
    phone.updateValueAndValidity();
  }

}
