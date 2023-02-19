import { createReducer, on } from '@ngrx/store';
import { UserActions } from './actions';
import { initUserState, UserState } from './state';

export const userReducer = createReducer(
    initUserState,
    on(UserActions.UpdateUser, update),
    on(UserActions.ResetUser, reset),
);

function update(state: UserState, user: {firstName: string, lastName: string}): UserState {
    return {
        ...state,
        ...user
    }
}

function reset(state: UserState): UserState {
    return initUserState;
}