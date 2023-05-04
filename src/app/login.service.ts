import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  singleUser: any;
  u:User=new User();
  a:string="";
  apiUrl:string="http://localhost:3000/user";
  constructor(private http:HttpClient) { }

  validateLoginDetails(email:any,password:any): boolean
  {
    let isValidUser=false;
    this.http.get<any>(this.apiUrl).subscribe((res)=>{
      console.log(res);
      const user= res.find((a:any)=>{
        return a.email== email && a.password==password
      });
      if(user)
      {
       alert("valid");
      isValidUser=true;  
      alert(isValidUser); 
      //return isValidUser; 
      }
    })
     
    return isValidUser;    
  }

  saveUser(user:any):Observable<any>
  {
    alert(user.email);
      return this.http.post(this.apiUrl,user);
  }

  changePassword(email:any,newPwd:any):any
  {
    user:new User;
    this.http.get<any>(this.apiUrl).subscribe((res)=>{
      console.log(res);
       const user= res.find((a:any)=>{
        return a.email== email
      });
      return this.http.put(this.apiUrl,user,user.id)
    })
      
       // console.log(user.password)
        
  }
/*
  getUserByEmail(email:any,pwd:string)
  {

    return this.http.get<User>('http://localhost:3000/user?email=manasa@gmail.com');
  }
*/

}
