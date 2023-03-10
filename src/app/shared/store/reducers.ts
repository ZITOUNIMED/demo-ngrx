import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { counterReducer } from "./counter/reducer";
import { traceReducer } from "./trace/reducer";
import { userReducer } from "./user/reducer";

export const reducers: ActionReducerMap<AppState> = {
    user: userReducer,
    counter: counterReducer,
    trace: traceReducer
};