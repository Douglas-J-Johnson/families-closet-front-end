import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  editing: boolean = false;
  changed: boolean = false;

  discardChangesModalOpen: boolean = false;
  saveModalOpen: boolean = false;
  removeModalOpen: boolean = false;

  genders = ['Male', 'Female', 'No Preference'];
  sizes = '';

  birthdate: Date;

  findPartners() {
    console.log('Find partners');
  }

  // Edit methods
  edit(): void {
    console.log('Edit child');
    this.editing = true;
  }

  // Discard Changes and Discard Changes modal methods
  discardChanges(): void {
    console.log('Discard child changes');
    this.discardChangesModalOpen = true;
  }

  confirmDiscardChanges(): void {
    console.log('Child changes discarded');
    this.discardChangesModalOpen = false;
    // Return values to initial values
    this.editing = false;
    this.changed = false;
  }

  cancelDiscardChanges(): void {
    console.log('Cancel discard child changes');
    this.discardChangesModalOpen = false;
  }

  // Save and Save Confirmation modal methods
  save(): void {
    console.log('Save child');
    this.saveModalOpen = true;
  }

  confirmSave(): void {
    console.log('Child Saved');
    this.saveModalOpen = false;
    // Perform save
    this.editing = false;
    this.changed = false;
  }

  cancelSave(): void {
    console.log('Cancel Child Save');
    this.saveModalOpen = false;
  }

  // Remove and Remove Confirmation modal methods
  remove(): void {
    console.log('Remove child');
    this.removeModalOpen = true;
  }

  confirmRemove(): void {
    console.log('Child Removed');
    this.removeModalOpen = false;
    // Remove object
  }

  cancelRemove(): void {
    console.log('Cancel Child Remove');
    this.removeModalOpen = false;
  }
}
