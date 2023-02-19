import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';


import { reducers } from './shared/store/reducers';
import { AppComponent } from './app.component';
import { AppEffects } from './shared/store/app.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ AppEffects ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
