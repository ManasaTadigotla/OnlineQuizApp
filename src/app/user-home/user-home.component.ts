import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Quiz } from '../quiz';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{

  public qReports:Quiz[]=[];
  quizInfo:any;
  constructor(
    private quesService:QuestionService,
    private builder:FormBuilder,private router:Router

  ){}

  ngOnInit(): void {
   // this.quizReportOfUser();
   let email=sessionStorage.getItem("userdetails");
   alert(email);
   if(email!==null)
   {
   //alert(email);
   this.viewQuizReportByEmail(email);
  }
  else
  {
    alert("please login");
    this.router.navigate(['/login']);
  }

  }
  viewQuizReportByEmail(email:any)
  {  
      //alert("welcome");      
      this.quesService.getArrayOfAllQuizReport().subscribe(data=>{
        console.log(data);
      this.qReports=data.filter((q:any)=>q.emailid==email);
      //this.qReports.filter(q=>q.emailid==email);
      console.log(this.qReports);
      }); 
  }

/*
  quizReportOfUser()
  {
    let email=sessionStorage.getItem("userdetails");
    alert(email);
    this.viewQuizReportByEmail(email);
    //this.quizInfo=this.qReports;

  }
  */
 


}
