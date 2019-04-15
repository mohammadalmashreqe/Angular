import { Component, OnInit } from '@angular/core';
import { ButtonServicesService } from '../button-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IButton } from '../butoons-list/IButton';


@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {
  name:string ;
  order :string ;
  PageTitle:string="Edit Button :"
  Button:IButton
  constructor(private route:ActivatedRoute,private router:Router,private myList:ButtonServicesService) { }

  ngOnInit() {
    let Id= +this.route.snapshot.paramMap.get("id");
    this. Button = this.myList.GetDeatails(Id);
    this.name=this.Button.name;
    this.order=this.Button.order; 


  }
  onBack():void 
  {
    this.router.navigate(['/ButtonList']);
  }

  onUpdate () : void 
  {
    this.myList.EditButton(+this.route.snapshot.paramMap.get("id"),this.name,this.order);

  }


}
