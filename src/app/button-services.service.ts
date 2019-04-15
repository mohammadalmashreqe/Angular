import { Injectable } from '@angular/core';
import { IButton } from './butoons-list/IButton';
import { IActivity } from './butoons-list/IActivity';

@Injectable({
  providedIn: 'root'
})
export class ButtonServicesService {
  List :IButton[] =[
    {butiId:1, name:'deposit', order:'1',Activities:[{ActId:1, Type:"Print",informationMessage:"hi"},{ActId:2, Type:"Print",informationMessage:"hi"}]},
    {butiId:2,name:'deposit', order:'1',Activities:[{ActId:2,Type:"Print",informationMessage:"hi"}]},
    {butiId:3,name:'deposit', order:'1',Activities:[{ActId:3,Type:"Print",informationMessage:"hi"}]}
  ];
  constructor() { }

  getList ():IButton[]
  {
    return this.List;
  }
  GetDeatails(id:number):IButton
  {
for(let i of this.List)
{
  if(id==i.butiId)
  return i ; 
}

  }

  getActivity(id:number):IActivity
  {
    for(let i of this.List)
    {
     for(let j of i.Activities)
     {
       if(j.ActId==id)
       return j; 
     }
    }
  }

  EditButton (id:number, name:string,order:string):void {
    
  
let count = this.getIndex(id);
 
if(count!=-1)
  {  this.List[count].name=name; 
    this.List[count].order=order;
  }
    
     
  }

  DeleteButton (id:number):void 
  {
    let x =-1; 
    let count = -1; 
    for(let i of this.List)
   {  x++;
     if(i.butiId==id)
     {
       
       count=x; 
       break; 
     }
    }

    if(count!=-1){
   
    delete this.List[count];
    
   
    }
    else
    return; 
  }
  
  getIndex(id:number):number
  {
    let x=-1; 
    for(var i=0;i<this.List.length;i++)
    {
      if(this.List[i].butiId==id)
      {x=i; 
        break; 
      }

    }
    return x; 
  }

}
