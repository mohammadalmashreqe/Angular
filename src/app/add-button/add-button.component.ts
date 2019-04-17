import { Component, OnInit } from '@angular/core';
import { IActivity } from '../butoons-list/IActivity';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonServicesService } from '../button-services.service';
import { IButton } from '../butoons-list/IButton';

@Component({
  
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
 public PageTitle:string ="";
  public ShowForm:boolean=false;
  public showEdit:boolean =false; 
  ActId:number;
  Type:string;
  Type2:string;
 public Information_message:string;
 public Information_message2:string;
  public  Activities : IActivity []=[];
 public name:string;
  public order:string;
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
    this.ShowForm=true;

  }
  onsaveActivity():void 
  {
    
     
     const temp = <IActivity> {
     ActId:this.Activities.length,
     Type:this.Type,
    informationMessage:this.Information_message

  };
  this.ShowForm=false;
  
  

  this.Activities.push(temp);
    
    
  }

  onCreate():void 
  {
    if(this.PageTitle=="Add Button")
    {
      const  tempButton=<IButton>      {
       name:this.name,
       order:this.order,
       butiId:+ButtonServicesService.List.length+1,
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
    
  }
  onCancel():void{
    this.ShowForm=false;

  }

  onEdit(id:number):void 
  {
   
    
    for (var i=0 ; i<this.Activities.length;i++)
    {
      if(this.Activities[i].ActId==id)
      {
        this.Type2=this.Activities[i].Type;
        this.Information_message2=this.Activities[i].informationMessage;
      this.ActId=this.Activities[i].ActId;  
       this.showEdit=true; 
       break;
       
      }
    }
 
    
    
 
  }
  onsaveedit(){


    for (var i=0 ; i<this.Activities.length;i++)
    {
      if(this.Activities[i].ActId==this.ActId)
      {
        this.Activities[i].Type=this.Type2;
      this.Activities[i].informationMessage=  this.Information_message2;
     
       this.showEdit=false; 
       break;
       
      }
    }


  
  }


  ondeletActivity (actid:number):void 
  {let pos=-1; 
for(var i=0; i<this.Activities.length;i++)
{
  if(this.Activities[i].ActId==actid)
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
    this.showEdit=false; 

  }
}
