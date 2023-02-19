import { createAction } from '@ngrx/store';

const IncrementAction = createAction('[Counter Component] increment action');
const DecrementAction = createAction('[Counter Component] decrement action');
const ResetCounterAction = createAction('[Counter Component] reset action');

export const CounterActions = {IncrementAction, DecrementAction, ResetCounterAction };