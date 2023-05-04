import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'OnlineTestApp';
  isNavbarVisiableAdmin:boolean=false;
  isNavbarVisiableUser:boolean=false;
  subjects:string[]=["html","angular","java","spring"];
  

  constructor(private router:Router)
  {

  }
  ngDoCheck()
  {
      let currenturl = this.router.url; // it will give us, component link text which present in Address bar.
      console.log(currenturl);

      if(currenturl=="/login"  || currenturl=="/register" || currenturl=="/")
      {
        this.isNavbarVisiableAdmin = false;
        this.isNavbarVisiableUser = false;
      }
      else  if(currenturl=="/admin")
      {
        this.isNavbarVisiableAdmin = true;
        this.isNavbarVisiableUser = false;
      }
      else  if(currenturl=="/user")
      {
        this.isNavbarVisiableAdmin = false;
        this.isNavbarVisiableUser = true;
      }
      
        
  }

  show()
  {
    //document.getElementById("d1").ariaExpanded;

   // aria-expanded="false";
  }

}
