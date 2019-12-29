import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SingleCourseComponent } from './single-course/single-course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { RateCourseComponent } from './rate-course/rate-course.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { Routes, RouterModule } from '@angular/router';
import { FilterCoursesComponent } from './filter-courses/filter-courses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NamePipe } from './pipes/name.pipe';
import { TeacherPipe } from './pipes/teacher.pipe';
import { SemesterPipe } from './pipes/semester.pipe';
import { ECTSPipe } from './pipes/ects.pipe';
import { MaxStudentsPipe } from './pipes/max-students.pipe';
import { CurrentRatingPipe } from './pipes/current-rating.pipe';
import { FormPipe } from './pipes/form.pipe';
import { RegistrationComponent } from './registration/registration.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';
import { ModifyCourseComponent } from './modify-course/modify-course.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    SingleCourseComponent,
    NavbarComponent,
    CreateCourseComponent,
    RateCourseComponent,
    PageHeaderComponent,
    CourseDetailsComponent,
    FilterCoursesComponent,
    PageNotFoundComponent,
    NamePipe,
    TeacherPipe,
    SemesterPipe,
    ECTSPipe,
    MaxStudentsPipe,
    CurrentRatingPipe,
    FormPipe,
    RegistrationComponent,
    LogInComponent,
    LogOutComponent,
    ModifyCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
