import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {AuthGuard} from './auth/services/auth.guard';
import {NotFoundComponent} from './ui/not-found/not-found.component';


export const routes: Routes = [
  { path : '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'home', component: AppComponent, canActivate: [AuthGuard] },
  { path : '**', component: NotFoundComponent },
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
