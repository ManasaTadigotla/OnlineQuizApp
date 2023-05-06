import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 // email:any;
  //password:string="";
  msg:string="";
  //user:User=new User();
  apiUrl:string='http://localhost:3000/user';
  //users:User[];
  constructor(
    private router:Router,private logSerc:LoginService,private http: HttpClient ,
    private builder:FormBuilder   
    ){
      sessionStorage.clear();
    }
  ngOnInit(): void {
    
  }
  loginForm=this.builder.group({
    email:this.builder.control('',[Validators.required,Validators.email]),
    password:this.builder.control('',[Validators.required,Validators.minLength(5)])
  });
  /*
  CheckUserDetailsOld()
  {
    //alert(this.logSerc.validateLoginDetails(this.loginForm.value.email,this.loginForm.value.password));
    if(this.logSerc.validateLoginDetails(this.loginForm.value.email,this.loginForm.value.password)==true)
    {
      alert(this.loginForm.value.email);
      sessionStorage.setItem("userdetails",this.loginForm.value.email);
      this.router.navigate(['/admin']);
    }
    else
    {
      alert(this.loginForm.value.email+" invalid");
    }
  }
  */
  CheckUserDetails()
  {
    if(this.loginForm.valid)
    {
      if(this.loginForm.value.email=="admin@gmail.com" && this.loginForm.value.password=="admin")
      {
        //alert(this.loginForm.value.email);
        sessionStorage.setItem("userdetails",this.loginForm.value.email);
        this.router.navigate(['/admin']);
      }
      else
      {
      this.http.get<any>(this.apiUrl).subscribe((res)=>{
        console.log(res);
        const user= res.find((a:any)=>{
          return a.email==this.loginForm.value.email
        });
        if(user)
        {
          alert(user.email)
          console.log(user);
        alert("valid user");
        sessionStorage.setItem("userdetails",user.email);
        this.router.navigate(['/user']);
        }
        else
        this.msg=("Please check email/password");
       });

    }
    }
    else
    {
      alert("Please provide proper email and password");
    }
     
     //const onsubmit=(this.email) => {
       
    }


  
}
