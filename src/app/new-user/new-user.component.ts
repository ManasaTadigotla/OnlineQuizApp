import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  constructor(private loginServ:LoginService,
    private builder:FormBuilder,
    private router:Router
    ){}

  regForm=new FormGroup({    
    id:this.builder.control(this.generateId("u"),[Validators.required]),
    email :this.builder.control('',[Validators.required,Validators.email]),
    password :this.builder.control('',[Validators.minLength(5),Validators.required])
  })

  generateId(prefix:any):any
    {
      let id=prefix;
      
      var d= new Date().getDate().toString();
      var t=new Date().getTime().toString();
      console.log(d);
      console.log(t);
      id=id+t;
      return id;

    }
  
  saveUser(form:any)
  {
    this.loginServ.saveUser(form.value).subscribe(data=>{
      console.log(data.email);
      this.router.navigate(['/login']);
    } )  

   
  }
}
