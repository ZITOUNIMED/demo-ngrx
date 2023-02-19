import { CounterState, initCounterState } from "./counter/state";
import { initUserState, UserState } from "./user/state";

export interface AppState {
    user: UserState,
    counter: CounterState,
}

export const initAppState: AppState = {
    user: initUserState,
    counter: initCounterState,
};