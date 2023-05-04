import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../question.service';
import { Observable, filter } from 'rxjs';
//import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination'
//import { MAT_RADIO_GROUP } from '@angular/material/radio';

import { Question } from '../question';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{
  subjects:string[]=["html","angular","java","spring"];
 // q:Array<any>;
  public questionBySubject:Question[]=[

  ];
  options:any=[];
  p:number=1;
  currentQuestion:number=0;
  subSelected:string="-1";
  optionSelected:any;
  isSelected:boolean=false;
  selectedFirst=-1;
  selectedSecond=-1;
  selectedThird=-1;
  defaultvalue:'';
  points:number=0;
  answer:string='';
  answerFirst='';
  answerSecond='';
  answerThird='';

 // selectedOption:string;
  //page:number=1;
  isTestPageVisible:boolean=false;
constructor(
  private aroute:ActivatedRoute,
  private quesService:QuestionService
){}
  ngOnInit(): void {    
    this.isTestPageVisible=false;  
    this.answerFirst='';
    this.answerSecond='';
    this.answerThird='';  
  }
  selectedOption(ques:any,option:any)
  {
alert("hi"+option);
  }

  changeOptioon(event: any)
  {
    this.optionSelected= event;
    if(event==this.questionBySubject[this.currentQuestion].firstoption)
    {
      this.answerFirst=event;
      this.answerSecond='';
      this.answerThird='';
      alert(event);
      alert(this.answerFirst);
    }
    if(event==this.questionBySubject[this.currentQuestion].secondoption)
    {
      this.answerFirst='';
      this.answerSecond=event;
      this.answerThird='';
      alert(event);
      alert(this.answerSecond);
    }
    if(event==this.questionBySubject[this.currentQuestion].thirdoption)
    {
      this.answerSecond='';
      this.answerFirst='';
      this.answerThird=event;
      alert(event);
      alert(this.answerThird);
    }
    
  }
  nextQuestion(ques:any,event:any)
  {
    //alert(this.optionSelected);
    //alert(ques.isCurrentAnswer);
    this.currentQuestion++;
    
   // this.answer='';
  /*
    for(let i=0;i<this.questionBySubject.length;i++)
    {
      if(this.questionBySubject[i]==ques)
      {
        if(this.questionBySubject[i].correctanswer==ques.selectedOption)
        {
         this.points++;
        }
        //alert(ques.correctAnswer);
      }
    }
    */
  }
  prevQuestion(ques:any)
  {
    this.currentQuestion--;
  }
 displayQuestionsBySubject(subject: any) {
  //alert(subject);
  this.quesService.viewAllQuestions().subscribe((data:any)=>{ 
    this.questionBySubject= data.filter((res:any)=>res.subject==subject); 
    if(this.questionBySubject!=null && this.questionBySubject.length>0)
    {/*
      for(let i=0;i<this.questionBySubject.length;i++)
      {
        this.questionBySubject[i].options[0]=this.questionBySubject[i].firstoption;
        this.questionBySubject[i].options[1]=this.questionBySubject[i].secondoption;
        this.questionBySubject[i].options[2]=this.questionBySubject[i].thirdoption;
      }
      */
      
      alert(this.questionBySubject.length);        
         this.isTestPageVisible=true; 
    }
    else
    {
      this.isTestPageVisible=false;
      alert("OOPs..No quiz on this subject!!!")  
      return;
    }
   // this.questionBySubject=data;
  //this.questionBySubject.filter(ques=>{ ques.subject==subject});
  console.log(this.questionBySubject);
  });
}
onSubjectChange(val:any)
{   
  if(this.subSelected=="-1")
  {
    alert("plz select subject");
    return;
  }
  else
  {
     //alert(this.subSelected);
     this.displayQuestionsBySubject(this.subSelected);
     //this.isTestPageVisible=true;
  }
}

onPageChange(event :any)
{
  this.p=event;
  this.displayQuestionsBySubject(this.subSelected);
}

}