import { Component } from '@angular/core';

@Component({
  selector: 'app-caregiver',
  templateUrl: './caregiver.component.html',
  styleUrls: ['./caregiver.component.scss']
})
export class CaregiverComponent {
  editing: boolean = false;
  changed: boolean = false;

  discardChangesModalOpen: boolean = false;
  saveModalOpen: boolean = false;
  removeModalOpen: boolean = false;

  // Edit methods
  edit(): void {
    console.log('Edit caregiver');
    this.editing = true;
  }

  // Discard Changes and Discard Changes modal methods
  discardChanges(): void {
    console.log('Discard caregiver changes');
    this.saveModalOpen = true;
  }

  confirmDiscardChanges(): void {
    console.log('Caregiver changes discarded');
    this.saveModalOpen = false;
  }

  cancelDiscardChanges(): void {
    console.log('Cancel discard caregiver changes');
    this.saveModalOpen = false;
  }

  // Save and Save Confirmation modal methods
  save(): void {
    console.log('Save caregiver');
    this.saveModalOpen = true;
  }

  confirmSave(): void {
    console.log('caregiver Saved');
    this.saveModalOpen = false;
  }

  cancelSave(): void {
    console.log('Cancel caregiver Save');
    this.saveModalOpen = false;
  }

  // Remove and Remove Confirmation modal methods
  remove(): void {
    console.log('Remove caregiver');
    this.removeModalOpen = true;
  }

  confirmRemove(): void {
    console.log('caregiver Removed');
    this.removeModalOpen = false;
  }

  cancelRemove(): void {
    console.log('Cancel caregiver Remove');
    this.removeModalOpen = false;
  }
}
