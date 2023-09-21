import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminBoardComponent } from './pages/admin/admin-board/admin-board.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminGuard } from './_services/admin.guard';
import { LoginGuard } from './_services/login.guard';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizzComponent } from './pages/admin/add-quizz/add-quizz.component';
import { UpdateAppComponent } from './pages/admin/update-quiz/update-app.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';

const routes: Routes = [
  {
    path: '',
    component:  HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component:  SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component:  LoginComponent,
    pathMatch: 'full'
  },
  { path: 'profile', 
  component: ProfileComponent 
},
{ 
    path: 'admin', 
    component: AdminBoardComponent,
    canActivate: [AdminGuard] ,
    children:[
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'categories',
    component: ViewCategoriesComponent
  },
  {
    path: 'add-category',
    component: AddCategoryComponent
  },
  {
    path: 'quizzes',
    component: ViewQuizzesComponent
  },
  {
    path: 'add-quiz',
    component: AddQuizzComponent
  },
  {
    path: 'quizzes/:qid',
    component: UpdateAppComponent
  },
  {
    path: 'view-questions/:qid/:title',
    component: ViewQuizQuestionsComponent
  },
]
},
{ path: 'user-board', 
component: UserDashboardComponent,
canActivate: [LoginGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
