import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './shared/store/app.state';
import { CounterActions } from './shared/store/counter/actions';
import { CounterState } from './shared/store/counter/state';
import { TraceState } from './shared/store/trace/state';
import { UserActions } from './shared/store/user/actions';
import { UserState } from './shared/store/user/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$: Observable<CounterState>;
  user$: Observable<UserState>;
  trace$: Observable<TraceState>;

  userForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private store: Store<AppState>){
    this.counter$ = this.store.select( s => s.counter);
    this.user$ = this.store.select(s => s.user);
    this.trace$ = this.store.select(s => s.trace);
  }

  updateUser():void {
    const value = this.userForm.value;
    this.store.dispatch(UserActions.UpdateUser(value));
  }

  increment(): void {
    this.store.dispatch(CounterActions.IncrementAction())
  }

  decrement(): void {
    this.store.dispatch(CounterActions.DecrementAction())
  }

  reset(): void {
    this.store.dispatch(CounterActions.ResetCounterAction())
  }
}
