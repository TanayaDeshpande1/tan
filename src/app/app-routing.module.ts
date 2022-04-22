import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { RegisterComponent } from './register/register.component';
import { SignInInsteadComponent } from './sign-in-instead/sign-in-instead.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SubmitComponent } from './submit/submit.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'navbar', component:NavbarComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signin', component: SignInInsteadComponent},
  {path: 'submit', component: SubmitComponent},
  {path:'image', component:ImagecomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ImagecomponentComponent, HomeComponent ,SignInComponent, RegisterComponent, SignInInsteadComponent, SubmitComponent]