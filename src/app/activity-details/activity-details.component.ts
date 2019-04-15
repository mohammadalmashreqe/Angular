import { Component, OnInit } from '@angular/core';
import { ButtonServicesService } from '../button-services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IActivity } from '../butoons-list/IActivity';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
  
})
export class ActivityDetailsComponent implements OnInit {
bid:number ;
  PageTitle :string="Activity Details"
  currenActivity : IActivity;
  constructor(private route:ActivatedRoute,private router:Router,private myList:ButtonServicesService) {
    let Id= +this.route.snapshot.paramMap.get("id");
    this.bid= +this.route.snapshot.paramMap.get("bid"); 
    this.currenActivity=myList.getActivity(Id);
   }

  ngOnInit() {
  }
  onBack():void 
  {
    this.router.navigate(['/Details',this.bid]);
  }
}
