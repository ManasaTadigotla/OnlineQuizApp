import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,Validators} from '@angular/forms';
import { QuestionService } from '../question.service';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
  msg: string="";
  subjects:string[]=["html","angular","java","spring"];
  
  constructor(
    private router:Router,
    private builder:FormBuilder,
    private quesServ:QuestionService
  ){}

  addQues=this.builder.group({
    subject:this.builder.control('-1',Validators.required),
    id:this.builder.control('',Validators.required),
    desc:this.builder.control('',Validators.required),
   // options:this.builder.control([['',''],['',''],['','']],Validators.required),
    firstoption:this.builder.control('',Validators.required),
    secondoption:this.builder.control('',Validators.required),
    thirdoption:this.builder.control('',Validators.required),
    correctanswer:this.builder.control('',Validators.required),
  })

  addNewQuestion()
  {
      this.quesServ.addQuestion(this.addQues.value).subscribe(data=>{
        console.log(data);
        alert("Added successfully");
        this.router.navigate(['/admin']);
      });


  }


}
