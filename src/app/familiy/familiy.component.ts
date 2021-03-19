import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-familiy',
  templateUrl: './familiy.component.html',
  styleUrls: ['./familiy.component.scss']
})
export class FamiliyComponent implements OnInit {
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
