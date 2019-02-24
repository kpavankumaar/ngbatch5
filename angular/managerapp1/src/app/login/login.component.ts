import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { AuthService } from '../core/services/auth.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[DataService,AuthService]
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(private dataService:DataService, 
              private authService:AuthService,
              private formBuilder: FormBuilder,
              private router:Router) { }

  ngOnInit() {
    this.buildForm();
    // const loginDetails = {'email':'k.pavankumar@gmail.com','password':'abcdef123'}
    // this.dataService.login(loginDetails).subscribe((booleanVal)=>{
    //   console.log(typeof(booleanVal), booleanVal );
      
      
    // })
  }
  buildForm() {
    
    this.loginForm = this.formBuilder.group({
        email:      ['', [ Validators.required]],
        password:   ['', [ Validators.required]]
    });
}

submit({ value, valid }: { value, valid: boolean }) {
    this.dataService.login(value).subscribe((status: boolean) => {
            if (status) {
              console.log('this.authservice.redirecturl',this.authService.redirectUrl);
              this.router.navigate([this.authService.redirectUrl]);
            } else {
                this.router.navigate(['/customers']);
            }
        })
    };


}
