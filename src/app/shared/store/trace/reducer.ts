import { createReducer, on } from '@ngrx/store';
import { TraceActions } from './actions';
import { initTraceState, TraceState } from './state';

export const traceReducer = createReducer(
    initTraceState,
    on(TraceActions.UpdateTrace, update),
    on(TraceActions.ResetTrace, reset),
);

function update(state: TraceState, trace: {newTrace: string}): TraceState {
    const traces = state.traces;
    return {
        traces: [...traces, trace.newTrace]
    };
}

function reset(state: TraceState): TraceState {
    return initTraceState;
}