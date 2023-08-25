import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './homepage/about-us/about-us.component';
import { ContactusComponent } from './homepage/contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'homepage',
component:HomepageComponent},
{
  path:'about-us',
  component:AboutUsComponent
},{

  path:'contactus',
  component:ContactusComponent

},
{path:"signin", component:SigninComponent},
{path:"signup", component:SignupComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
