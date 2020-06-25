import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { orgregistration } from './orgregistration/orgregistration.component';
import { ExamComponent } from './exam/exam.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'orgregistration', component: orgregistration},
      {path: 'exam', component: ExamComponent},
      {path: 'login', component: LoginComponent}
  ])
   ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, orgregistration,ExamComponent,LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
