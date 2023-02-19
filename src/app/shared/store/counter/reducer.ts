import { createReducer, on } from '@ngrx/store';
import { CounterState, initCounterState } from './state';
import { CounterActions } from './actions';

export const counterReducer = createReducer(
    initCounterState,
    on(CounterActions.IncrementAction, increment),
    on(CounterActions.DecrementAction, decrement),
    on(CounterActions.ResetCounterAction, reset)
)

function increment(state: CounterState): CounterState {
    return {
        ...state,
        count: state.count+1
    }
}

function decrement(state: CounterState): CounterState {
    return {
        ...state,
        count: state.count-1
    }
}

function reset(state: CounterState): CounterState {
    return initCounterState;
}