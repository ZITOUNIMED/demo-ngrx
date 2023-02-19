import { createAction, props } from "@ngrx/store";

export const TRACE_UPDATE_TYPE = '[Trace] Update';
export const TRACE_RESET_TYPE = '[Trace] Reset';

const UpdateTrace = createAction(
    TRACE_UPDATE_TYPE, 
    props<{newTrace: string}>()
);

const ResetTrace = createAction(TRACE_RESET_TYPE);

export const TraceActions = {
    UpdateTrace,
    ResetTrace
};