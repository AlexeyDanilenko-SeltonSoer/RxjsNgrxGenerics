import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as fromStore from '@my-store/index'
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HeaderComponent } from './layouts/header/header.component';
import { MaterialModule } from './shared/material/material.module';
import { FlexModule } from '@angular/flex-layout';
import { effects, metaReducers } from '@my-store/index';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot(fromStore.reducers, {metaReducers}),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    FlexModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
