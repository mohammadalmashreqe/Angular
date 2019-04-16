import { Component, OnInit } from '@angular/core';
import { IActivity } from '../butoons-list/IActivity';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonServicesService } from '../button-services.service';
import { IButton } from '../butoons-list/IButton';
import { resolveDefinition } from '@angular/core/src/view/util';

@Component({
  
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
 public PageTitle:string ="Create Button";
  public ShowForm:boolean=false;
  public showEdit:boolean =false; 
  Type:string;
 public Information_message:string;
  public  Activities : IActivity []=[];
 public name:string;
  public order:string;
  constructor(private route:ActivatedRoute,private router:Router,private myList:ButtonServicesService) { }

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
    let tempButton:IButton;
    tempButton.name=this.name;
    tempButton.order=this.order;
    tempButton.butiId=+this.myList.List.length+1;
    tempButton.Activities=this.Activities;
    this.myList.List.push(tempButton);
  }
  onCancel():void{
    this.ShowForm=false;

  }

  onEdit():void 
  {
    this.showEdit=true; 
  }
  onsaveedit(){
    this.showEdit=false;
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
delete this.Activities[pos];


  }
}
