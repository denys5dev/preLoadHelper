import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {LoginPageComponent} from './containers/login-page.component';
import {DevexModule} from '../devex';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth.guard';
import {AuthRoutingModule} from './auth-routing.module';
import {StoreModule} from '@ngrx/store';
import { reducers } from './state';
import {EffectsModule} from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';

export const COMPONENTS = [LoginFormComponent, LoginPageComponent];

@NgModule({
  imports: [
    CommonModule,
    DevexModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [AuthService, AuthGuard]
})
export class AuthModule { }
