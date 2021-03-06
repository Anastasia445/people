import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreatePeopleComponent } from './create-people/create-people.component';
import { DeletePeopleComponent } from './delete-people/delete-people.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    CreatePeopleComponent,
    DeletePeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
