import { Component, OnInit } from '@angular/core';
import { ButtonServicesService } from '../button-services.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.css']
})
export class EditActivityComponent implements OnInit {
  PageTitle:string="Edit Activity";
  Information_message:string; 
  Type : string ; 
  bid :number
  constructor(private route:ActivatedRoute,private router:Router,private myList:ButtonServicesService) {

    let Id= +this.route.snapshot.paramMap.get("id");
    this. bid=+this.route.snapshot.paramMap.get("bid");

    let current=this.myList.getActivity(Id);
 
    this.Information_message=current.informationMessage;
  
 this.Type=current.Type;

   }

  ngOnInit() {
    
  }
  onBack():void 
  {
    this.router.navigate(['/Details',this.bid]);
  }

  onUpdate () : void 
  {
    let Id= +this.route.snapshot.paramMap.get("id");
    this.myList.getActivity(Id).informationMessage=this.Information_message;
    this.myList.getActivity(Id).Type=this.Type;
    this.onBack();


  }


}
