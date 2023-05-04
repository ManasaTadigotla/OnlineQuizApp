import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuizComponent } from './quiz/quiz.component';
import { TestReportComponent } from './test-report/test-report.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:NewUserComponent},
  {path:"admin",component:AdminHomeComponent},
  {path:"user",component:UserHomeComponent},
  {path:"addquestion",component:AddQuestionComponent},
  {path:"quiz",component:UserHomeComponent},
  {path:"startquiz",component:StartQuizComponent},
  {path:"quizreport",component:TestReportComponent},
  {path:"myquiz",component:QuizComponent},
  {path:"changepassword",component:ChangepasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
