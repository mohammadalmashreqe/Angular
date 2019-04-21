import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButoonsListComponent } from './butoons-list/butoons-list.component';
import { AddButtonComponent } from './Button Attributes/attributes-button.component';

import { ButtonDetailsComponent } from './button-details/button-details.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';

import {FormsModule} from '@angular/forms';


/**
 * Ng module
 */

@NgModule({
  declarations: [
    AppComponent,
    ButoonsListComponent,
    AddButtonComponent,
    ButtonDetailsComponent,
    ActivityDetailsComponent,
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
     
      {path:'ButtonList',component:ButoonsListComponent},
      {path:'AddButton/:id',component:AddButtonComponent},

      {path:'',redirectTo:"ButtonList",pathMatch:'full'},
      {path:'Details/:id',component:ButtonDetailsComponent},
      {path : "ActivityDetails/:id/:bid",component:ActivityDetailsComponent}
  
 ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
