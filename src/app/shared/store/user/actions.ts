import { createAction, props } from "@ngrx/store";

export const USER_UPDATE_TYPE = '[User] Update';
export const USER_RESET_TYPE = '[User] Reset';

const UpdateUser = createAction(
    USER_UPDATE_TYPE, 
    props<{firstName: string, lastName: string}>()
);

const ResetUser = createAction(USER_RESET_TYPE);

export const UserActions = {
    UpdateUser,
    ResetUser
};