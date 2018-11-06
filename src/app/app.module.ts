import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule, Routes} from '@angular/router';
import { AddusersComponent } from './component/addusers/addusers.component';
import { HttpModule } from '@angular/http';
import { UnderConstructionComponent } from './component/under-construction/under-construction.component';
import { ViewPrivilegesComponent } from './component/view-privileges/view-privileges.component';



const appRoutes: Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path : 'header',
    component : HeaderComponent
  },
  {
    path : 'adduser',
    component : AddusersComponent
  },
  {
    path : 'underconstruction',
    component : UnderConstructionComponent
  },
  {
    path : 'viewprivileges',
    component : ViewPrivilegesComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    AddusersComponent,
    UnderConstructionComponent,
    ViewPrivilegesComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
