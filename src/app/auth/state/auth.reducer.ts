import {User} from '../models/user';
import {AuthActionTypes} from '../actions/auth.actions';

export interface UserState {
  currentUser: User;
}

export interface State {
  loggedIn: boolean;
  user: User | null;
}

export const initialState: State = {
  loggedIn: false,
  user: null
};

export function reducer(state = initialState, action): State {
  switch (action.type) {
    case  AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user,
      };
    }

    case AuthActionTypes.Logout: {
      return initialState;
    }

    default: {
      return state;
    }

  }
}

export  const getLoggedIn = (state: State) => state.loggedIn;
export const getUser = (state: State) => state.user;
