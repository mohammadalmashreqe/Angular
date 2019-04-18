import { Component, OnInit } from '@angular/core';
import { IActivity } from '../butoons-list/IActivity';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonServicesService } from '../button-services.service';
import { IButton } from '../butoons-list/IButton';

@Component({
  
  templateUrl: './attributes-button.component.html',
  styleUrls: ['./attributes-button.component.css']
})
export class AddButtonComponent implements OnInit {
 public PageTitle:string ="";
  public showAddActivityForm:boolean=false;
  public showEditActivityFrom:boolean =false; 
  ActivityId:number;
  Type:string;
  TypeofeditingActivity:string;
  isOrderValid:string;
 public Information_message:string;
 public Information_message_ofEditingActivity:string;
  public  Activities : IActivity []=[];
 public name:string;
  public order:number;
  ButtonText:string ;
  constructor(private route:ActivatedRoute,private router:Router,private myList:ButtonServicesService) {
    let Id= +this.route.snapshot.paramMap.get("id");
    if(Id!=-100)
    {
      this.PageTitle="Edit Button "; 
      this.Activities=myList.GetDeatails(Id).Activities;
      this.name=myList.GetDeatails(Id).name;
      this.order=myList.GetDeatails(Id).order;
      this.ButtonText="Update";
      
    }
    else 
    {
      this.PageTitle="Add Button";
      this.ButtonText="Create";
    }
   
   }

  ngOnInit() {
  }

  onAddActivity():void {
    this.showAddActivityForm=true;

  }
  onsaveActivity():void 
  {
    
     
     const temp = <IActivity> {
     ID:this.Activities.length,
     Type:this.Type,
    informationMessage:this.Information_message

  };
  this.showAddActivityForm=false;
  
  

  this.Activities.push(temp);
    
    
  }

  onCreate():void 
  {
    
    
    if(+this.order)
    {
      if(Number.isInteger(this.order))
      {
    if(this.PageTitle=="Add Button")
    {
      const  tempButton=<IButton>      {
       name:this.name,
       order:this.order,
       ID:+this.myList.List.length+1,
       Activities:this.Activities
  };
    this.myList.AddButton(tempButton);
    this.router.navigate(['ButtonList']);
    }
    else 
    {
      let Id= +this.route.snapshot.paramMap.get("id");
      this.myList.EditButton(Id,this.name,this.order,this.Activities);

      this.router.navigate(['ButtonList']);
    }
    this.isOrderValid="";
  }
  else
  {
    this.isOrderValid="Please Enter an integer number ";
  }
}
  else 
  this.isOrderValid="Please Enter a valid number ";
    
  }
  onCancel():void{
    this.showAddActivityForm=false;

  }

  onEdit(id:number):void 
  {
   
    
    for (var i=0 ; i<this.Activities.length;i++)
    {
      if(this.Activities[i].ID==id)
      { this.showEditActivityFrom=true; 
        this.TypeofeditingActivity=this.Activities[i].Type;
        this.Information_message_ofEditingActivity=this.Activities[i].informationMessage;
      this.ActivityId=this.Activities[i].ID;  
       
       break;
       
      }
    }
 
    
    
 
  }
  onsaveedit(){


    for (var i=0 ; i<this.Activities.length;i++)
    {
      if(this.Activities[i].ID==this.ActivityId)
      {
        this.Activities[i].Type=this.TypeofeditingActivity;
      this.Activities[i].informationMessage=  this.Information_message_ofEditingActivity;
     
       this.showEditActivityFrom=false; 
       break;
       
      }
    }


  
  }


  ondeletActivity (actid:number):void 
  {let pos=-1; 
for(var i=0; i<this.Activities.length;i++)
{
  if(this.Activities[i].ID==actid)
  {pos=i; 
  break; 
  }

}
if(pos!=-1)
 this.Activities.splice(pos,1);


  }
  onBack():void 
  {
    this.router.navigate(['/ButtonList']);
  }
  onCanceledit():void 
  {
    this.showEditActivityFrom=false; 

  }
}
