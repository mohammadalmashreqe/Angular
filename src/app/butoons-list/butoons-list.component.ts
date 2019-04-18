import { Component, OnInit } from '@angular/core';

import { ButtonServicesService } from '../button-services.service';
import { IButton } from './IButton';
import { ActivatedRoute, Router } from '@angular/router';

@Component({

  templateUrl: './butoons-list.component.html',
  styleUrls: ['./butoons-list.component.css'],


})
export class ButoonsListComponent implements OnInit {
  pageTitle:string="Buttons List";
  Length :number;
  List:IButton[];
  constructor( private route:ActivatedRoute,private router:Router,private myList:ButtonServicesService) { 
    this.List=myList.getList();
 

  }

  ngOnInit() {
  }
  onCreate():void 
  {
   
    this.router.navigate(['/AddButton',-100]);
    
  }
  onDelete(Id:number):void
  {
   
    
    this.myList.DeleteButton(Id);

  }
}
