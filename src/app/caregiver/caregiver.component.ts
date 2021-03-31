import { FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caregiver',
  templateUrl: './caregiver.component.html',
  styleUrls: ['./caregiver.component.scss']
})
export class CaregiverComponent implements OnInit {
  @Input() caregiver: any;
  @Output() caregiverEditing = new EventEmitter;
  @Output() caregiverChanged = new EventEmitter;

  caregiverForm = new FormGroup ({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl()
  });

  discardChangesModalOpen: boolean = false;
  saveModalOpen: boolean = false;
  removeModalOpen: boolean = false;

  ngOnInit(): void {
    // console.log('CAREGIVER', this.caregiver);
  }

  // Edit methods
  edit(): void {
    console.log('Edit caregiver');
    this.caregiver.editing = true;
    this.caregiverEditing.emit(this.caregiver.id);
  }

  cancelEditing(): void {
    console.log('Caregiver editing cancelled');
    this.caregiver.editing = false;
  }

  // Discard Changes and Discard Changes modal methods
  discardChanges(): void {
    console.log('Discard caregiver changes');
    this.discardChangesModalOpen = true;
  }

  confirmDiscardChanges(): void {
    console.log('Caregiver changes discarded');
    this.discardChangesModalOpen = false;
    // Return values to initial values
    this.caregiver.editing = false;
    this.caregiver.changed = false;
  }

  cancelDiscardChanges(): void {
    console.log('Cancel discard caregiver changes');
    this.discardChangesModalOpen = false;
  }

  // Save and Save Confirmation modal methods
  save(): void {
    console.log('Save caregiver');
    this.saveModalOpen = true;
  }

  confirmSave(): void {
    console.log('caregiver Saved');
    this.saveModalOpen = false;
    // Perform save
    this.caregiver.editing = false;
    this.caregiver.changed = false;
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
    // Remove object
  }

  cancelRemove(): void {
    console.log('Cancel caregiver Remove');
    this.removeModalOpen = false;
  }
}
