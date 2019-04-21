import { Component, OnInit } from '@angular/core';
import { IActivity } from '../butoons-list/IActivity';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonServicesService } from '../button-services.service';
import { IButton } from '../butoons-list/IButton';

@Component({

  templateUrl: './attributes-button.component.html',
  styleUrls: ['./attributes-button.component.css']
})
export class AddButtonComponent implements OnInit {
  public PageTitle: string = "";
  public showAddActivityForm: boolean = false;
  public showEditActivityFrom: boolean = false;
  ActivityId: number;
  Type: string;
  TypeofeditingActivity: string;
  isOrderValid: string;
  public Information_message: string;
  public Information_message_ofEditingActivity: string;
  public Activities: IActivity[] = [];
  public name: string;
  public order: number;
  ButtonText: string;
  /**
   * Creates an instance of add button component.
   * @param route 
   * @param router 
   * @param myList 
   */
  constructor(private route: ActivatedRoute, private router: Router, private myList: ButtonServicesService) {
   try {
    let Id = +this.route.snapshot.paramMap.get("id");
    if (Id != -100) {
      this.PageTitle = "Edit Button ";
      this.Activities = myList.GetDeatails(Id).Activities;
      this.name = myList.GetDeatails(Id).name;
      this.order = myList.GetDeatails(Id).order;
      this.ButtonText = "Update";

    }
    else {
      this.PageTitle = "Add Button";
      this.ButtonText = "Create";
    }
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
   * Determines whether add activity on
   */
  onAddActivity(): void {
    try {
    this.showAddActivityForm = true;
    this.Information_message = "";
    this.Type = "";
    }
    catch(err)
    {
      console.log(err);
    }

  }
  /**
   * On save  activity
   */
  onsaveActivity(): void {

try {
    const temp = <IActivity>{
      ID: this.Activities.length,
      Type: this.Type,
      informationMessage: this.Information_message

    };
    this.showAddActivityForm = false;



    this.Activities.push(temp);
  }
  catch(err)
  {
    console.log(err);
  }


  }

  /**
   * create Button
   */
  onCreate(): void {

    try {
      if (+this.order) {
        if (Number.isInteger(this.order)) {
          if (this.PageTitle == "Add Button") {
            const tempButton = <IButton>{
              name: this.name,
              order: this.order,
              ID: +this.myList.List.length + 1,
              Activities: this.Activities
            };
            this.myList.AddButton(tempButton);
            this.router.navigate(['ButtonList']);
          }
          else {
            let Id = +this.route.snapshot.paramMap.get("id");
            this.myList.EditButton(Id, this.name, this.order, this.Activities);

            this.router.navigate(['ButtonList']);
          }
          this.isOrderValid = "";
        }
        else {
          this.isOrderValid = "Please Enter an integer number ";
        }
      }
      else
        this.isOrderValid = "Please Enter a valid number ";

    }
    catch (err) {
      console.log(err);
    }
  }
  /**
   * Determines whether cancel of add activity on
   */
  onCancelOfAddActivity(): void {
    try {
      this.showAddActivityForm = false;
    }
    catch (err) {
      console.log(err);
    }
  }

  /**
   * Determines whether edit activity on
   * @param id 
   */
  onEditActivity(id: number): void {
    try {

      for (var AttributesIndex = 0; AttributesIndex < this.Activities.length; AttributesIndex++) {
        if (this.Activities[AttributesIndex].ID == id) {
          this.showEditActivityFrom = true;
          this.TypeofeditingActivity = this.Activities[AttributesIndex].Type;
          this.Information_message_ofEditingActivity = this.Activities[AttributesIndex].informationMessage;
          this.ActivityId = this.Activities[AttributesIndex].ID;

          break;

        }
      }
    }
    catch (err) {
      console.log(err);
    }





  }

  /**
   * Onsaves edited activity
   */
  onsaveEditedActivity(): void {

    try {
      for (var i = 0; i < this.Activities.length; i++) {
        if (this.Activities[i].ID == this.ActivityId) {
          this.Activities[i].Type = this.TypeofeditingActivity;
          this.Activities[i].informationMessage = this.Information_message_ofEditingActivity;

          this.showEditActivityFrom = false;
          break;

        }
      }

    }
    catch (err) {
      console.log(err);
    }

  }


  /**
   * Determines whether delet activity on
   * @param actid 
   */
  onDeletActivity(actid: number): void {
    try {
      if (confirm("Are you sure you want to delete?")) {
        let pos = -1;
        for (var i = 0; i < this.Activities.length; i++) {
          if (this.Activities[i].ID == actid) {
            pos = i;
            break;
          }

        }
        if (pos != -1)
          this.Activities.splice(pos, 1);
      }
    }
    catch (err) {
      console.log(err);
    }


  }

  /**
   * Determines whether back on
   */
  onBack(): void {
    try {
      this.router.navigate(['/ButtonList']);
    }
    catch (err) {
      console.log(err);
    }
  }
  onCancelEditActivity(): void {
    try {
      this.showEditActivityFrom = false;
    }
    catch (err) {
      console.log(err);
    }

  }
}
