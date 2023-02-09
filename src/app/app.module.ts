import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './Components/error/error.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AllUsersComponent } from './Components/all-users/all-users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const routes:Routes = [
  {path:"", component:AllUsersComponent},
  {path:"users", component:AllUsersComponent},
  {path:"users/:id", component:UserDetailsComponent},
  {path:"profile", component:ProfileComponent},
  {path:"**", component:ErrorComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ProfileComponent,
    AllUsersComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
