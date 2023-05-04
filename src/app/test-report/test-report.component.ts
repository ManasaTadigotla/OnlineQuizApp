import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.css']
})
export class TestReportComponent implements OnInit {

 quizReport:any;
  msg: any="";
  constructor(private questionServ:QuestionService,
    private http: HttpClient
    ){
    
  }
  ngOnInit(): void {
   this.ViewAllTestPeport();
  }


  ViewAllTestPeport()
  {
    /*
    this.http.get("http://localhost:3000/quizreport").subscribe(data=>{
    this.msg="hello";  
    this.msg=data;
    this.msg="bye";
    })
    */
   
    this.questionServ.viewAllQuizReport().subscribe((data: any)=>{
      console.log(data);
      this.quizReport=data;
      //this.msg=this.quizReport;
      //this.msg+=data;
    });
    
  }

}
