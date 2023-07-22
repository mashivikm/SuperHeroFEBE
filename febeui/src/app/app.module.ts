import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllSuperHerosComponent } from './super-heros/all-super-heros/all-super-heros.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AddSuperHerosComponent } from './super-heros/add-super-heros/add-super-heros.component';
import { EditSuperHerosComponent } from './super-heros/edit-super-heros/edit-super-heros.component';

@NgModule({
  declarations: [
    AppComponent,
    AllSuperHerosComponent,
    AddSuperHerosComponent,
    EditSuperHerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
