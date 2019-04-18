import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IActivity } from '../butoons-list/IActivity';
import { ButtonServicesService } from '../button-services.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
  
})
export class ActivityDetailsComponent implements OnInit {
ButtonID:number ;
  PageTitle :string="Activity Details"
  currenActivity : IActivity;
  constructor(private route:ActivatedRoute,private router:Router,private myList:ButtonServicesService) {
    let Id= +this.route.snapshot.paramMap.get("id");
    this.ButtonID= +this.route.snapshot.paramMap.get("bid"); 
    this.currenActivity=myList.getActivity(Id);
   }

  ngOnInit() {
  }
  onBack():void 
  {
    this.router.navigate(['/Details',this.ButtonID]);
  }
}
