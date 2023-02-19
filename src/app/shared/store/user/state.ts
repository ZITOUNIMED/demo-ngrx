export interface UserState {
    firstName: string;
    lastName: string;
}

export const initUserState : UserState = {
    firstName: '',
    lastName: '',
};