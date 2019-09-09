import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { AppComponent } from './app.component';
import { CurrentChallengeComponent } from './challenges/current-challenge/current-challenge.component';
import { StackComponent } from './layouts/stack/stack.component';
import { FlexboxComponent } from './layouts/flexbox/flexbox.component';
import { FlexboxAssignmentComponent } from './assignments/flexbox-assignment/flexbox-assignment.component';
import { GridComponent } from './layouts/grid/grid.component';
import { GridAssignmentComponent } from './assignments/grid-assignment/grid-assignment.component';
import { AbsoluteComponent } from './layouts/absolute/absolute.component';
import { ChallengeEditComponent } from './challenges/challenge-edit/challenge-edit.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, NativeScriptFormsModule],
  declarations: [AppComponent, CurrentChallengeComponent, StackComponent, FlexboxComponent, FlexboxAssignmentComponent, GridComponent, GridAssignmentComponent, AbsoluteComponent, ChallengeEditComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
