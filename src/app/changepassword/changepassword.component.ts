import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {

  pwd:string="";

  constructor(private loginServ:LoginService,
    private router:Router
    ){}

  changePassword()
  {
    const email=sessionStorage.getItem("userdetails");
    this.loginServ.changePassword(email,this.pwd).subscribe((res: any)=>{
      console.log(res);
      alert("Password changed successfully");
      this.router.navigate(['/login']);
    })

  }
}
