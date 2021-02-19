import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  editing: boolean = false;
  changed: boolean = true;

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

  // Remove and Remove Confirmation modal methods
  remove(): void {
    console.log('Remove child');
    this.removeModalOpen = true;
  }

  confirmRemove(): void {
    console.log('Child Removed');
    this.removeModalOpen = false;
  }

  cancelRemove(): void {
    console.log('Cancel Child Remove');
    this.removeModalOpen = false;
  }
}
