import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { httpInterceptorProviders } from './_helpers/http.iterceptor';
import { AdminBoardComponent } from './pages/admin/admin-board/admin-board.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './_services/admin.guard';
import { LoginGuard } from './_services/login.guard';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { SidebarComponent as UserSideBar} from './pages/user/sidebar/sidebar.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizzComponent } from './pages/admin/add-quizz/add-quizz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UpdateAppComponent } from './pages/admin/update-quiz/update-app.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AllQuizzesComponent } from './pages/user/all-quizzes/all-quizzes.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { QuizInstructionComponent } from './pages/user/quiz-instruction/quiz-instruction.component';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';
import {MatRadioModule} from '@angular/material/radio';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AdminBoardComponent,
    ProfileComponent,
    UserDashboardComponent,
    SidebarComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizzComponent,
    UpdateAppComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    UserSideBar,
    AllQuizzesComponent,
    QuizInstructionComponent,
    StartQuizComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatExpansionModule,
    MatDividerModule,
    MatRadioModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    })

  ],
  providers: [
    httpInterceptorProviders,
  AdminGuard,
  LoginGuard
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
