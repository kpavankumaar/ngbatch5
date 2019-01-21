import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators, AbstractControl } from '@angular/forms';

function ratingRange (c: AbstractControl): { [key: string]: boolean } | null {
    console.log('rating validation', c );
    if (c.value !== null && (isNaN(c.value) || c.value < 0 || c.value > 5)) {
      console.log('rating validation');
      return { 'range': true };
    }
    return null;
}


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
  customersInformation: FormGroup;
  constructor() { }
  
  customersFormDetails() { 
    console.log(this.customersInformation);
  }
  ngOnInit() {
    this.customersInformation = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.email]),
      phone: new FormControl(''),
      verify: new FormControl(true),
      rating: new FormControl('', ratingRange()),
      notification: new FormControl('')
    });
  }
  setNotification(notify:string){
    const phone = this.customersInformation.get('phone');
    if( notify === 'text') {
      phone.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
    } else {
      phone.clearValidators();
    }
    phone.updateValueAndValidity();
  }

}
