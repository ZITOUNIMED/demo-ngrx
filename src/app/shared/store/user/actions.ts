import { createAction, props } from "@ngrx/store";

const UpdateUser = createAction(
    '[User Component] Update', 
    props<{firstName: string, lastName: string}>()
);
const ResetUser = createAction('[User Component] Reset');

export const UserActions = {
    UpdateUser,
    ResetUser
};