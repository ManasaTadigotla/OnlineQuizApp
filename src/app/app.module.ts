import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
//import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { QuizComponent } from './quiz/quiz.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
//import {TableModule} from 'primeng/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbPaginationNext } from '@ng-bootstrap/ng-bootstrap';
import { TestReportComponent } from './test-report/test-report.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminHomeComponent,
    UserHomeComponent,
    QuizComponent,
    AddQuestionComponent,
    NewUserComponent,
    TestReportComponent,
    StartQuizComponent,
    ChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule, 
    NgxPaginationModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
