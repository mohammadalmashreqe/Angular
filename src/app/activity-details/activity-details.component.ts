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
  /**
   * Creates an instance of activity details component.
   * @param route 
   * @param router 
   * @param myList 
   */
  constructor(private route:ActivatedRoute,private router:Router,private myList:ButtonServicesService) {
    try{
    let Id= +this.route.snapshot.paramMap.get("id");
    this.ButtonID= +this.route.snapshot.paramMap.get("bid"); 
    this.currenActivity=myList.getActivity(Id);
    }
    catch(err)
    {
      console.log(err);
    }
   }

  /**
   * on init
   */
  ngOnInit() {
  }
  /**
   * Determines whether back on
   */
  onBack():void 
  {
    try {
    this.router.navigate(['/Details',this.ButtonID]);
    }
    catch(err)
    {
      console.log(err);
    }
  }
}
