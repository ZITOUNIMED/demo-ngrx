import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { createEffect } from '@ngrx/effects';
import { Actions, ofType } from '@ngrx/effects';

import { USER_UPDATE_TYPE } from './user/actions';
import { TraceActions } from './trace/actions';


@Injectable()
export class AppEffects {
    constructor(private actions$: Actions){}
    logUser$ = createEffect(() => this.actions$
    .pipe(
        ofType(USER_UPDATE_TYPE),
        switchMap((action: {firstName: string, lastName: string}) => {
           return of(TraceActions.UpdateTrace({newTrace: `Update ${action.firstName} ${action.lastName}`}));
        })
    ));
}