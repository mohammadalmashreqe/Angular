import { Injectable } from '@angular/core';
import { IButton } from './butoons-list/IButton';
import { IActivity } from './butoons-list/IActivity';

@Injectable({
  providedIn: 'root'
})
export class ButtonServicesService {
   List :IButton[] =[];
  constructor() { }

  AddButton (Button :IButton):void 
  {
    this.List.push(Button);
  }
  getList ():IButton[]
  {
    return this.List;
  }
  GetDeatails(id:number):IButton
  {
      for(let Item of this.List)
      {
      if(id==Item.ID)
      return Item ; 
    }

  }

  getActivity(id:number):IActivity
  {
    for(let Button of this.List)
    {
     for(let Activity of Button.Activities)
     {
       if(Activity.ID==id)
       return Activity; 
     }
    }
  }

  EditButton (id:number, name:string,order:number,activities:IActivity[]):void {
    
  
let Index = this.getIndex(id);
 
if(Index!=-1)
  {
    this.List[Index].name=name; 
    this.List[Index].order=order;
    this.List[Index].Activities.concat(activities);
    
  }
    
     
  }

  DeleteButton (id:number):void 
  {
    let Counter =-1; 
    let Index = -1; 
    for(let Item of this.List)
   {  Counter++;
     if(Item.ID==id)
     {
       
       Index=Counter; 
       break; 
     }
    }

    if(Index!=-1){
   
      this.List.splice(Index,1);
    
   
    }
    else
    return; 
  }
  
  getIndex(id:number):number
  {
    let Index=-1; 
    for(var counter=0;counter<this.List.length;counter++)
    {
      if(this.List[counter].ID==id)
      {Index=counter; 
        break; 
      }

    }
    return Index; 
  }

}
