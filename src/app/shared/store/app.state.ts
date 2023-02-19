import { CounterState, initCounterState } from "./counter/state";
import { initTraceState, TraceState } from "./trace/state";
import { initUserState, UserState } from "./user/state";

export interface AppState {
    user: UserState,
    counter: CounterState,
    trace: TraceState,
}

export const initAppState: AppState = {
    user: initUserState,
    counter: initCounterState,
    trace: initTraceState,
};