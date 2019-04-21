import { Injectable } from '@angular/core';
import { IButton } from './butoons-list/IButton';
import { IActivity } from './butoons-list/IActivity';

/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
export class ButtonServicesService {
  /**
   * List  of button 
   */
  List: IButton[] = [];
  /**
   * Creates an instance of button services 
   */
  constructor() { }

  /**
   * Adds button to the list 
   * @param Button 
   */
  
  AddButton(Button: IButton): void {
    try {
      this.List.push(Button);
    }

    catch (err) {
      console.log(err);
    }
  }
  /**
   * Gets buttons list
   * @returns list 
   */
  getList(): IButton[] {
    try {
      return this.List;
    }
    catch (err) {
      console.log(err);
    }
  }
  /**
   * Gets details of button by id 
   * @param id 
   * @returns Button 
   */
  GetDeatails(id: number): IButton {
    try {
      for (let Item of this.List) {
        if (id == Item.ID)
          return Item;
      }
    }
    catch (err) {
      console.log(err);
    }

  }

  /**
   * Gets spicific activity By id 
   * @param id 
   * @returns activity 
   */
  getActivity(id: number): IActivity {
    try {
      for (let Button of this.List) {
        for (let Activity of Button.Activities) {
          if (Activity.ID == id)
            return Activity;
        }
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  /**
   * Edits button according to id 
   * @param id 
   * @param name 
   * @param order 
   * @param activities 
   */
  EditButton(id: number, name: string, order: number, activities: IActivity[]): void {

    try {
      let Index = this.getIndex(id);

      if (Index != -1) {
        this.List[Index].name = name;
        this.List[Index].order = order;
        this.List[Index].Activities.concat(activities);

      }
    }
    catch (err) {
      console.log(err);
    }

  }

  /**
   * Deletes button According to id 
   * @param id 
   * @returns void  
   */
  DeleteButton(id: number): void {
    try {
      let Counter = -1;
      let Index = -1;
      for (let Item of this.List) {
        Counter++;
        if (Item.ID == id) {

          Index = Counter;
          break;
        }
      }

      if (Index != -1) {

        this.List.splice(Index, 1);


      }
      else
        return;
    }
    catch (err) {
      console.log(err);
    }
  }

  /**
   * Gets index of spicific button in the list 
   * @param id 
   * @returns index 
   */
  getIndex(id: number): number {
    try {
      let Index = -1;
      for (var counter = 0; counter < this.List.length; counter++) {
        if (this.List[counter].ID == id) {
          Index = counter;
          break;
        }

      }
      return Index;
    }
    catch (err) {
      console.log(err);
    }
  }

}
