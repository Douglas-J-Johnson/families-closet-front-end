import { Component } from '@angular/core';

@Component({
  selector: 'app-familiy',
  templateUrl: './familiy.component.html',
  styleUrls: ['./familiy.component.scss']
})
export class FamiliyComponent {
  familySectionOpen: boolean = true;
  caregiversSectionOpen: boolean = true;
  childrenSectionOpen: boolean = true;

  editing: boolean = false;
  changed: boolean = false;

  discardChangesModalOpen: boolean = false;
  saveModalOpen: boolean = false;

  addCaregiver(): void {
    console.log('Add Caregiver')
  }

  caregiverPermissions(): void {
    console.log('Caregiver Permissions')
  }

  addChild(): void {
    console.log('Add child')
  }

  // Edit methods
  edit(): void {
    console.log('Edit child');
    this.editing = true;
  }

  // Discard Changes and Discard Changes modal methods
  discardChanges(): void {
    console.log('Discard child changes');
    this.saveModalOpen = true;
  }

  confirmDiscardChanges(): void {
    console.log('Child changes discarded');
    this.saveModalOpen = false;
  }

  cancelDiscardChanges(): void {
    console.log('Cancel discard child changes');
    this.saveModalOpen = false;
  }

  // Save and Save Confirmation modal methods
  save(): void {
    console.log('Save child');
    this.saveModalOpen = true;
  }

  confirmSave(): void {
    console.log('Child Saved');
    this.saveModalOpen = false;
  }

  cancelSave(): void {
    console.log('Cancel Child Save');
    this.saveModalOpen = false;
  }
}
