import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/userService/user-service.service';
import { Router } from '@angular/router';
interface Country {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})

export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private userService:UserServiceService,private router:Router) { }
  ngOnInit(): void {
    
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      });
  }
  
    // convenience getter for easy access to form fields
    get formValidation() { return this.loginForm.controls; }

    handleLogin(){
      this.submitted=true;
      if(this.loginForm.invalid){
        return
      }
     const {email,password}= this.loginForm.value;
      this.userService.userLogin({
        emailId: email,
        password:password
      }).subscribe((res:any)=>{
        localStorage.setItem("AuthToken",res.data)
        this.router.navigate(["/dashboard/notes"]
      )},
      err=>console.log(err))
    
      console.log(this.loginForm.value)

    }
  countrys: Country[] = [
    {value: 'English (United States)', viewValue: 'English (United States)'},
    {value: 'French', viewValue: 'French'},
    {value: 'Russian', viewValue: 'Russian'},
  ];
  selectedCountry = this.countrys[0].value;




}
