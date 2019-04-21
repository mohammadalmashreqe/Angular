import { Component, OnInit } from '@angular/core';

import { ButtonServicesService } from '../button-services.service';
import { IButton } from './IButton';
import { ActivatedRoute, Router } from '@angular/router';

@Component({

  templateUrl: './butoons-list.component.html',
  styleUrls: ['./butoons-list.component.css'],


})
export class ButoonsListComponent implements OnInit {
  pageTitle: string = "Buttons List";
  Length: number;
  List: IButton[];
  constructor(private route: ActivatedRoute, private router: Router, private myList: ButtonServicesService) {
    this.List = myList.getList();


  }

  /**
   * on init
   */
  ngOnInit() {
  }
  /**
   * Determines whether create on
   */
  onCreate(): void {
try {
    this.router.navigate(['/AddButton', -100]);
}
catch (err) {
  console.log(err);
}

  }
  /**
   * Determines whether delete on
   * @param Id 
   */
  onDelete(Id: number): void {
    try {

      if (confirm("Are you sure you want to delete?")) {
        this.myList.DeleteButton(Id);
      }
    }
    catch (err) {
      console.log(err);
    }
  }

}
