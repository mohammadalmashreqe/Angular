import { Injectable } from '@angular/core';
import { IButton } from './butoons-list/IButton';
import { IActivity } from './butoons-list/IActivity';

@Injectable({
  providedIn: 'root'
})
export class ButtonServicesService {
 static List :IButton[] =[];
  constructor() { }

  AddButton (b :IButton):void 
  {
    ButtonServicesService.List.push(b);
  }
  getList ():IButton[]
  {
    return ButtonServicesService.List;
  }
  GetDeatails(id:number):IButton
  {
for(let i of ButtonServicesService.List)
{
  if(id==i.butiId)
  return i ; 
}

  }

  getActivity(id:number):IActivity
  {
    for(let i of ButtonServicesService.List)
    {
     for(let j of i.Activities)
     {
       if(j.ActId==id)
       return j; 
     }
    }
  }

  EditButton (id:number, name:string,order:string,act:IActivity[]):void {
    
  
let count = this.getIndex(id);
 
if(count!=-1)
  {  ButtonServicesService.List[count].name=name; 
    ButtonServicesService.List[count].order=order;
    ButtonServicesService.List[count].Activities.concat(act);
    
  }
    
     
  }

  DeleteButton (id:number):void 
  {
    let x =-1; 
    let count = -1; 
    for(let i of ButtonServicesService.List)
   {  x++;
     if(i.butiId==id)
     {
       
       count=x; 
       break; 
     }
    }

    if(count!=-1){
   
     ButtonServicesService.List.splice(count,1);
    
   
    }
    else
    return; 
  }
  
  getIndex(id:number):number
  {
    let x=-1; 
    for(var i=0;i<ButtonServicesService.List.length;i++)
    {
      if(ButtonServicesService.List[i].butiId==id)
      {x=i; 
        break; 
      }

    }
    return x; 
  }

}
