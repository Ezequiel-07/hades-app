import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MeComponent } from './components/me/me.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { SearchComponent } from './components/search/search.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {
    pathMatch:'full',
    path:"",
    redirectTo:"home"
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"signin",
    component:SigninComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"me",
    component:MeComponent
  },
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"settings",
    component:SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }