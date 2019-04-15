import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButoonsListComponent } from './butoons-list/butoons-list.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { ButtonDetailsComponent } from './button-details/button-details.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';

import {FormsModule} from '@angular/forms';
import { EditActivityComponent } from './edit-activity/edit-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    ButoonsListComponent,
    AddButtonComponent,
    EditButtonComponent,
    ButtonDetailsComponent,
    ActivityDetailsComponent,
    EditActivityComponent,
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
     
      {path:'ButtonList',component:ButoonsListComponent},
      {path:'AddButton',component:AddButtonComponent},
      {path:'EditButton/:id',component:EditButtonComponent},
      {path:'',redirectTo:"ButtonList",pathMatch:'full'},
      {path:'Details/:id',component:ButtonDetailsComponent},
      {path : "ActivityDetails/:id/:bid",component:ActivityDetailsComponent},
      {path:"EditActivity/:id/:bid",component:EditActivityComponent}
 ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
