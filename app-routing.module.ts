import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCourseComponent } from './create-course/create-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { FilterCoursesComponent } from './filter-courses/filter-courses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogOutComponent } from './log-out/log-out.component';

import { AuthGuard } from './guard/auth.guard';
import { ModifyCourseComponent } from './modify-course/modify-course.component';


const routes: Routes = [
  { path: 'modify-course/:id', component: ModifyCourseComponent },
  // { path: 'modify-course/:id', component: ModifyCourseComponent, canActivate: [AuthGuard]  },

  { path: 'dashboard', component: CourseListComponent },
  { path: 'course/:id', component: CourseDetailsComponent },
  { path: 'create-course', component: CreateCourseComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LogInComponent },
  { path: 'logout', component: LogOutComponent },
  { path: 'filter', component: FilterCoursesComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
