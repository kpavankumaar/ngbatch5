import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { AuthService } from '../core/services/auth.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
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
    console.log(this.authService.redirectUrl);
    
    this.dataService.login(value).subscribe((status: boolean) => {
            if (status) {
              console.log('this.authservice.redirecturl',this.authService.redirectUrl, typeof this.authService.redirectUrl, 'id', this.authService.id);
              if(this.authService.redirectUrl){
                // update the login status in authService.loggedIn 
                // if you fail to do this canActivate method will redirect to login page 
                // because canActivate routeGaurd will stop from loading the edit page
                this.authService.logedIn = status;
                const url = this.authService.redirectUrl;
                this.authService.redirectUrl = ""
                this.router.navigateByUrl(url);
              }else{
                this.router.navigate(['/customers']);
              }
              
            }else{
              console.log('unable to login');
            }
        })
    };


}
