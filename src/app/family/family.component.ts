import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {
  @Input() family: any;

  familySectionOpen: boolean = true;
  caregiversSectionOpen: boolean = true;
  childrenSectionOpen: boolean = true;

  editing: boolean = false;
  changed: boolean = false;

  discardChangesModalOpen: boolean = false;
  saveModalOpen: boolean = false;

  ngOnInit(): void {
    console.log('FAMILY', this.family);

    console.log('Caregivers w/o state', this.family.caregivers);

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
    console.log('Add Caregiver');
  }

  caregiverPermissions(): void {
    console.log('Caregiver Permissions');
  }

  addChild(): void {
    console.log('Add child');
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
