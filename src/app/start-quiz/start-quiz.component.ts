import { Component,OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { interval } from 'rxjs';
import { Quizreport } from '../quizreport';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  subjects:string[]=["html","angular","java","spring"];
  subSelected:string="-1";
   noOfAttemptedQues:number=0;
   noOfCorrectAns:number=0;
   unAttempted:number=0;
   wrongAns:number=0;
    q:Quizreport=new Quizreport();
  name:string;
  questionArray:Question[]=[];
  currentQuestion:number=0;
  counter:number;
  points:number=0;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  //progress: string = "0";
  isQuizCompleted : boolean = false;
  isCurrentAnswer:boolean=false;
  firstoption:string;
  msg: string;
  isTestPageVisible:boolean=false;
  datepipe: any;
  

  constructor(private quesServ:QuestionService){}

  ngOnInit(): void {
    this.name=sessionStorage.getItem("userdetails");
    //this.getQuestions();
    //this.displayQuestionsBySubject(this.subSelected);
    this.isTestPageVisible=false;
    this.isQuizCompleted=false;
    this.counter=50;
    this.startCounter();
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
     this.isTestPageVisible=true;
  }
}

  getQuestions()
  {
    this.quesServ.getAllQuestions().subscribe(res=>{
      console.log(res);
    })
  }
  displayQuestionsBySubject(subject: any) {
    //alert(subject);
    this.isTestPageVisible=false;
    this.quesServ.viewAllQuestions().subscribe((data:any)=>{ 
      this.questionArray= data.filter((res:any)=>res.subject==subject); 
      if(this.questionArray!=null && this.questionArray.length>0)
      { 
       // alert(this.questionArray.length);   
       if(this.questionArray.length>0)
       {     
           this.isTestPageVisible=true; 
       }
       else
       {
        alert("Sorry!No quiz available on this subject");
        this.isTestPageVisible=false;
       }
      }
      else
      {
        //this.isTestPageVisible=false;
        alert("OOPs..No quiz on this subject!!!")  
        this.isTestPageVisible=false;
        return;
      }
     // this.questionBySubject=data;
    //this.questionBySubject.filter(ques=>{ ques.subject==subject});
    console.log(this.questionArray);
    });
  }

   prevQuestion()
  {
    this.currentQuestion--;
    //alert("prev");

  }

  nextQuestion()
  {
    this.currentQuestion++;
    //alert("next");
  }
  answer(currentQno: number, option: any) {

    
    if (option.correct) {
      this.points ++;
      this.correctAnswer++;
      ////this.nextQuestion();
    
    } else {
     
      this.inCorrectAnswer++;
      this.points -= 10;
      //this.nextQuestion();
    }
  }
    
  onSelect(question:any,options:any,option:any) {
      
      question.isAttempted=true;
      options.forEach((element:any) => {
       // alert(element.correct);
        element.isSelected=false;
       // alert(element.isSelected);
      });
      this.isCurrentAnswer=true;
      if(option.correct)
      { 
        question.isCorrect=true;
       // this.points++;
        //this.correctAnswer++
        //alert(this.points);
      }
      else
      {
        //this.points--;
        question.isCorrect=false;
        //this.inCorrectAnswer++;
      }
      option.isSelected=true;
    }

  changeOPtion(option:any,currentQno:number)
  {

  }
  startCounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.getResult();
          this.isTestPageVisible=false;
          //this.counter = 60;
          //this.points -= 10;
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe();
      //this.stopCounter();
    }, 600000);
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  
  getResult()
  {
    this.stopCounter();
    this.questionArray.forEach(ques=>{
      if(ques.isAttempted==true)
      {
          this.noOfAttemptedQues++;
      }
      if(ques.isCorrect)
      {
        this.noOfCorrectAns++;
        this.points++;
      }
      this.unAttempted=this.questionArray.length-this.noOfAttemptedQues;
      this.wrongAns=this.questionArray.length-this.noOfCorrectAns;

    })
    this.isTestPageVisible=false;
    this.isQuizCompleted=true;
   this.saveQuizReport(); 

  }

  generateId(prefix:any):any
  {
    let id=prefix;
    
    //var d= new Date().getDate().toString();
    var t=new Date().getTime().toString();
    //console.log(d);
    console.log(t);
    id=id+t;
    return id;

  }
 saveQuizReport()
  {
    this.q.noofquestions=this.questionArray.length;
    this.q.correctanswers=this.noOfCorrectAns;
    this.q.answeeredquestions=this.noOfAttemptedQues;
    this.q.date= new Date();
    this.q.emailid=this.name;
    this.q.subject=this.subSelected;
    this.q.id=this.generateId("q");
    this.quesServ.addQuizReport(this.q).subscribe((data: any)=>{
      console.log(data);
    });
    
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }
  resetQuiz() {
    this.resetCounter();
    this.displayQuestionsBySubject("angular");
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    //this.progress = "0";

  }


}
