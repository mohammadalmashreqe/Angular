import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButoonsListComponent } from '../butoons-list/butoons-list.component';
import { IButton } from '../butoons-list/IButton';
import { ButtonServicesService } from '../button-services.service';

@Component({
  selector: 'app-button-details',
  templateUrl: './button-details.component.html',
  styleUrls: ['./button-details.component.css'],
  providers:[ButtonServicesService]
})
export class ButtonDetailsComponent implements OnInit {
 
  PageTitle:string="Button Details";
  CrrentButton : IButton;
 
  constructor(private route:ActivatedRoute,private router:Router,private myList:ButtonServicesService) {
  
   }

  ngOnInit() {
    let Id= +this.route.snapshot.paramMap.get("id");
    
    this.CrrentButton=this.myList.GetDeatails(Id);

    }
    onBack():void 
    {
      this.router.navigate(['/ButtonList']);
    }
 

  }


