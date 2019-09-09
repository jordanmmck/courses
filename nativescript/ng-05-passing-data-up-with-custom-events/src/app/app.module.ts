import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';

@NgModule({
  declarations: [AppComponent, PersonsComponent, PersonInputComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
