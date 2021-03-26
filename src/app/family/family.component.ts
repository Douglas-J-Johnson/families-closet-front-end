import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {
  @Input() family: any;

  familyForm = new FormGroup ({
    displayName: new FormControl(),
    locationActual: new FormControl(),
    locationDisplay: new FormControl()
  });

  familySectionOpen: boolean = true;
  caregiversSectionOpen: boolean = true;
  childrenSectionOpen: boolean = true;

  editing: boolean = false;
  changed: boolean = false;

  discardChangesModalOpen: boolean = false;
  saveModalOpen: boolean = false;

  ngOnInit(): void {
    // console.log('FAMILY', this.family);

    this.family.caregivers.forEach(caregiver => {
      caregiver.editing = false;
      caregiver.changed = false;
    });

    this.family.children.forEach(child => {
      child.editing = false;
      child.changed = false;
    })
  }

  caregiverEditing(caregiverID): void {
    console.log("Editing Caregiver", caregiverID);
  }

  caregiverChanged(caregiverID): void {
    console.log("Caregiver Changed", caregiverID);
  }

  childEditing(childID): void {
    console.log("Editing Child", childID);
  }

  childChanged(childID): void {
    console.log("Child Changed", childID);
  }

  addCaregiver(): void {
    console.log('Add Caregiver', this.hasNewCaregiver());

    if(!this.hasNewCaregiver()) {
      this.family.caregivers.push(
        {
          changed: false,
          editing: true,
          email: "",
          family_id: this.family.id,
          first_name: "new",
          id: 0,
          last_name: ""
        }
      )
    }
  }

  hasNewCaregiver(): boolean {
    let newFound: boolean = false;

    this.family.caregivers.forEach(caregiver => {
      if(caregiver.id === 0) newFound = true;
    });

    return newFound;
  }

  addChild(): void {
    console.log('Add child', this.hasNewChild());

    if(!this.hasNewChild()) {
      this.family.children.push(
        {
          birthdate: (new Date).toString(),
          changed: false,
          editing: true,
          family_id: this.family.id,
          first_name: "new",
          give: false,
          give_gender_preference: "",
          id: 0,
          receive: false,
          receive_gender_preference: "",
        }
      );
    }
  }

  hasNewChild(): boolean {
    let newFound: boolean = false;

    this.family.children.forEach(child => {
      if(child.id === 0) newFound = true;
    });

    return newFound;
  }

  // Edit methods
  edit(): void {
    console.log('Edit family information');
    this.editing = true;
  }

  cancelEditing(): void {
    console.log('Family editing cancelled');
    this.editing = false;
  }

  // Discard Changes and Discard Changes modal methods
  discardChanges(): void {
    console.log('Discard family information changes');
    this.discardChangesModalOpen = true;
  }

  confirmDiscardChanges(): void {
    console.log('Family information changes discarded');
    this.discardChangesModalOpen = false;
    // Return values to initial values
    this.editing = false;
    this.changed = false;
  }

  cancelDiscardChanges(): void {
    console.log('Cancel discard family information changes');
    this.discardChangesModalOpen = false;
  }

  // Save and Save Confirmation modal methods
  save(): void {
    console.log('Save family information');
    this.saveModalOpen = true;
  }

  confirmSave(): void {
    console.log('Family information saved');
    this.saveModalOpen = false;
    // Perform save
    this.editing = false;
    this.changed = false;
  }

  cancelSave(): void {
    console.log('Cancel family information save');
    this.saveModalOpen = false;
  }
}
