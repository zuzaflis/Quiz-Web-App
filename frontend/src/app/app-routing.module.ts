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
    path: 'board',
    component: AdminBoardComponent
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
