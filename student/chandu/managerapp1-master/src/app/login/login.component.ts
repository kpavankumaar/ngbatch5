import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { AuthService } from '../core/services/auth.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage;
  loginForm;
  constructor(private dataService:DataService,
              private authService:AuthService,
              private formBuilder:FormBuilder,
              private router:Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }

  submit({value,valid}:{value,valid:boolean}){
    this.dataService.login(value).subscribe((status:boolean)=>{
      if(status){
        console.log('this.authService.redirectUrl',this.authService.redirectUrl);
        this.router.navigate([this.authService.redirectUrl]);
      }else{
        this.router.navigate(['/customers']);
      }
    })
  };

}
