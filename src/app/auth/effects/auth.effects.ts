import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActionTypes, Login, LoginFailure, LoginSuccess} from '../actions/auth.actions';
import {catchError, exhaustMap, map, tap} from 'rxjs/operators';
import {Authenticate, User} from '../models/user';
import {AuthService} from '../services/auth.service';
import {of} from 'rxjs';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map(action => action.payload),
    exhaustMap((auth: Authenticate) =>
      this.authService.login(auth).pipe(
        map(user => new LoginSuccess({ user })),
        catchError(error => of(new LoginFailure(error)))
      ))
  );

  @Effect({dispatch: false})
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => this.router.navigate(['/']))
  )

  @Effect({dispatch: false})
  loginRedirect$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginRedirect, AuthActionTypes.Logout),
    tap(authed => {
      this.router.navigate((['/login']));
    })
  )

  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router) {}

}
