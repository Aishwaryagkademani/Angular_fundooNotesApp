import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/userService/user-service.service';

interface Country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  passwordValid : boolean=false;

  registerForm!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,private userServices:UserServiceService) { }
    ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', [Validators.required,Validators.pattern("^[A-Z][a-zA-z \.]*$")]],
          lastName: ['', [Validators.required,Validators.pattern("^[A-Z][a-zA-z \.]*$")]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', [Validators.required]],
      });
  }

  // convenience getter for easy access to form fields
  get formValidation() { return this.registerForm.controls; }

  handleRegister(){
    const passwordValue=this.registerForm.value.password;
    const confirmValue=this.registerForm.value.confirmPassword;
    let value1:boolean=passwordValue === confirmValue;

    if(value1){
      this.passwordValid=true;
      this.submitted=true;
       

    const {firstName,lastName,email,password}= this.registerForm.value
    this.userServices.userRegister({
      firstName:firstName,
      lastName:lastName,
      emailId:email,
      password:password
    }).subscribe(res=>console.log(res),err=>console.log(err))
    
    
    }
    console.log(this.registerForm.value)


    // if(this.passwordValue ==this.confirmValue){
    //   this.passwordValid=true;
    // // }
    // console.log(this.passwordValid)
    // console.log(this.passwordValue)
    // console.log(this.confirmValue)

  }
  //select country in footer part
  countrys: Country[] = [
    {value: 'English (United States)', viewValue: 'English (United States)'},
    {value: 'French', viewValue: 'French'},
    {value: 'Russian', viewValue: 'Russian'},
  ];
  selectedCountry = this.countrys[0].value;

}
