import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { QuestionService } from '../question.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from '../question';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  viewQuesInfo:any;
    

  constructor(
    private quesService:QuestionService,
    private builder:FormBuilder,
    private router:Router
  ){}

  ngOnInit():void
  {  alert(sessionStorage.getItem("userdetails"));
    if(sessionStorage.getItem("userdetails")!=null)
    {
      this.viewAll();
    }
    else
    {
      this.router.navigate(['/login']);
    }
    
   //this.viewAll();
  }

  viewAll()
  {
    this.quesService.viewAllQuestions().subscribe((data: any)=>{
      this.viewQuesInfo=data;
    });
  
   // this.viewpersonInfo= this.personServ.ViewAllPersonsData();
   //this.viewpersonInfo=Person;
  }
  RemoveQuestion(id:any)
  {
    this.quesService.deleteQuestion(id).subscribe((data: any)=>{
      console.log(data);
      alert("Question Deleted....");
      this.viewAll();
    });
     
      //this.router.navigate(['/viewone/102'])

    
  }
/*
  ViewData(id:any)
  {    
    this.router.navigate(['/viewone', id]);
    //this.router.navigate(['/viewone'], { state: { id: '102' } });
   // this.router.navigate(['/viewone'])
   // this.router.navigateByUrl("/viewone/102");
  }

  ModifyData(id:any)
  {
    this.router.navigate(['/modify', 102]);
  }
  */





}
