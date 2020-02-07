import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './album/album.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { PhotoesComponent } from './photoes/photoes.component';


const routes: Routes = [
  {path: 'home',canActivate :  [AuthGuardService],component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'album' ,canActivate :  [AuthGuardService] ,component:AlbumComponent,children:[{
    path:':id' ,canActivate :  [AuthGuardService] ,component:PhotoesComponent
  }]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
