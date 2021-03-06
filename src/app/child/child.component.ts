import { Component, EventEmitter, Input, OnInit, ChangeDetectionStrategy, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  @Input() child: any;
  @Output() childEditing = new EventEmitter;
  @Output() childChanged = new EventEmitter;

  childForm = new FormGroup ({
    firstName: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required),
    give: new FormControl('', Validators.required),
    receive: new FormControl('', Validators.required),
  });

  get firstName() {return this.childForm.get('firstName')}
  get birthdate() {return this.childForm.get('birthdate')}
  get give() {return this.childForm.get('give')}
  get receive() {return this.childForm.get('receive')}

  firstNameErrors(): any {
    if (!this.child.editing) {return null;}
    if (!this.firstName.touched) {return null; }
    if (this.firstName.errors?.required) {return "First Name is required.";}
  }

  discardChangesModalOpen: boolean = false;
  saveModalOpen: boolean = false;
  removeModalOpen: boolean = false;

  genders = ['Male', 'Female', 'No Preference'];
  sizes = '';

  ngOnInit(): void {
    console.log('CHILD', this.child);
  }

  findPartners() {
    console.log('Find partners');
  }

  // Edit methods
  edit(): void {
    console.log('Edit child');
    this.child.editing = true;
    this.childEditing.emit(this.child.id);
  }

  cancelEditing(): void {
    console.log('Child editing cancelled');
    this.child.editing = false;
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
    this.child.editing = false;
    this.child.changed = false;
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
    this.child.editing = false;
    this.child.changed = false;
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
