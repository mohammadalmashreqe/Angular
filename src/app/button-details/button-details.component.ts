import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButoonsListComponent } from '../butoons-list/butoons-list.component';
import { IButton } from '../butoons-list/IButton';
import { ButtonServicesService } from '../button-services.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-button-details',
  templateUrl: './button-details.component.html',
  styleUrls: ['./button-details.component.css'],
 
})
export class ButtonDetailsComponent implements OnInit {
 
  PageTitle:string="Button Details";
  CrrentButton : IButton;
  showEditForm:boolean=false;
  Type:string ;
 Information_message:string;
 ActivityID:number;

  constructor(private route:ActivatedRoute,private router:Router,private myList:ButtonServicesService) {
  
   }

  ngOnInit() {
    let Id= +this.route.snapshot.paramMap.get("id");
    
    this.CrrentButton=this.myList.GetDeatails(Id);

    }
    onBack():void 
    {
      this.router.navigate(['/ButtonList']);
    }

    onDelete(ActId:number):void 
    {
      let pos = -1; 

     for (var i=0; i<this.CrrentButton.Activities.length;i++)
     {
       if(this.CrrentButton.Activities[i].ID==ActId)
       pos=i; 

     }

    if(pos!=-1)
    {
      this.CrrentButton.Activities.splice(pos,1);

    }


  }

 onsaveedit( ):void 
 {
  let pos = -1; 
  for (var i=0; i<this.CrrentButton.Activities.length;i++)
  {

    if(this.CrrentButton.Activities[i].ID==this.ActivityID)
    pos=i; 

  }
if(pos!=-1)
   {this.CrrentButton.Activities[pos].Type=this.Type;
   this.CrrentButton.Activities[pos].informationMessage=this.Information_message;
   
  this.showEditForm=false; 
   }

 }

 onEditActivity(id :number):void 

 {
   this.ActivityID=id; 
   
   for(var i=0;i<this.CrrentButton.Activities.length;i++)
   {
     if(this.CrrentButton.Activities[i].ID==id)
     {
      this.ActivityID=id; 
      this.Type=this.CrrentButton.Activities[i].Type;
      this.Information_message=this.CrrentButton.Activities[i].informationMessage;
 this.showEditForm=true;
 break; 
     }
   }
   
   
   
 }

 onCanceledit():void 
 {
   this.showEditForm=false; 
   
 }

  }


