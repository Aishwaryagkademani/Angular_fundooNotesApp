import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private HttpService:HttpServiceService) { 
  }

  userLogin(data:object){
    return this.HttpService.loginApiCall("User/Login",data);
  }

  userRegister(data:object){
    return this.HttpService.registerApiCall("User/Registration",data);
  }
}
