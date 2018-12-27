import { NgModule } from '@angular/core';
import {LoginPageComponent} from './containers/login-page.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
