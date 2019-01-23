import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators, AbstractControl} from '@angular/forms';

function verifyEmail(c:AbstractControl):{[key:string]:boolean | null}{
  var emailControl = c.get('email');
  var confirmMailControl = c.get('confirmEmail');
  if(emailControl.value === confirmMailControl.value){
    return null;
  }
  return {'match':true};
}

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent implements OnInit {
  customerInformation:FormGroup;
  constructor() { }

  customerDetails(){
    console.log("Customer Info on submit: "+this.customerInformation);
  }

  ngOnInit() {
    this.customerInformation = new FormGroup({
      firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastName: new FormControl('',[Validators.required,Validators.minLength(3)]),
      emailGroup: new FormGroup({
        email: new FormControl('', [Validators.required,Validators.email]),
        confirmEmail: new FormControl('', [Validators.required,Validators.email]),
      },verifyEmail),
           
      phone:new FormControl(''),
      verify:new FormControl(true),
      notification:new FormControl(''),
      rating:new FormControl(''),
    })
  }

  setNotification(val:String){
    //alert("came");
    //const phone = this.customerInformation.get('phone').value;
    const phone = this.customerInformation.get('phone');
    //alert("phone: "+phone);
    if(val === "text"){
      phone.setValidators([Validators.required,Validators.minLength(10),Validators.maxLength(10)]);
      //this.customerInformation.get('phone').setValidators([Validators.required,Validators.minLength(10),Validators.maxLength(10)]);
      //alert("came to phone validation");
    }else{
      phone.clearValidators();
      //phone.
      //this.customerInformation.get('phone').clearValidators();
      //alert("came to clearValidators");
    }
    phone.updateValueAndValidity();
    //this.customerInformation.get('phone').updateValueAndValidity();
  }



}
