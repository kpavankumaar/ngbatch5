import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators, AbstractControl } from '@angular/forms';
import { RenderDebugInfo } from '@angular/core/src/render/api';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

function verifyEmail(c:AbstractControl):{ [key:string]: boolean} | null{
  var emailControl = c.get('email');
  var confirmEmailControl = c.get('confirmEmail');
  if(emailControl.value === confirmEmailControl.value){
    return null;  
  } 
  return {'match':true}
}

// rating validation function
function ratingRange (min:number,max:number){
    return function (c: AbstractControl): { [key: string]: boolean } | null {
      console.log('rating validation', c );
      if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
        console.log('rating validation');
        return { 'range': true };
      }
      return null;
    }
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
  color = 'red';
  customersFormDetails() { 
    console.log(this.customersInformation);
  }
  ngOnInit() {
    this.customersInformation = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      emailGroup: new FormGroup({
        email: new FormControl('', [Validators.required,Validators.email]),
        confirmEmail: new FormControl('', [Validators.required,Validators.email]),
      },verifyEmail),
      phone: new FormControl(''),
      verify: new FormControl(true),
      rating: new FormControl('', ratingRange(0,5)),
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
