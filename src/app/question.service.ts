import { Injectable } from '@angular/core';
import { Question } from './question';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Quizreport } from './quizreport';
import { User } from './user';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  
  public qReports:Quiz[]=[];
  apiUrl:string="http://localhost:3000/question";
  apiUrlQuizReport:string="http://localhost:3000/quizreport";

  constructor(
    private http:HttpClient

  ) { }
  addQuestion(ques:any):Observable<any>
  {
    return this.http.post(this.apiUrl, ques); 

  }

  viewAllQuestions():Observable<any>
  {
      return this.http.get<any>(this.apiUrl);
  }
  getAllQuestions():Observable<Question>
  {
    return this.http.get<Question>(this.apiUrl);
  }

  deleteQuestion(id:any):any
  {
      return this.http.delete(this.apiUrl+'/'+id);
  }

//Quiz Report***

viewAllQuizReport():any
{
  return this.http.get<any>(this.apiUrlQuizReport);
}
getArrayOfAllQuizReport():Observable<any>
{
  return this.http.get<any>(this.apiUrlQuizReport);
}
viewQuizReportByEmail(email:any)
{
  
  alert("welcome");
  //let repoArray:any;
  //repoArray= 
  this.getArrayOfAllQuizReport().subscribe(data=>{
    this.qReports=data;
    this.qReports.filter(q=>q.emailid==email);
  });
  
  //this.getArrayOfAllQuizReport().pipe(map(qReports=>qReports.filter(q=>q.emailid==email)))
 // this.getArrayOfAllQuizReport().pipe(map(res=>res.filter(r=>r.emailid==email));
   // this.getArrayOfAllQuizReport().pipe(cancatmap())
  

 
}

addQuizReport(report:any)
{
  this.http.post(this.apiUrlQuizReport,report);
}

}
