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
  saveModalOpen: boolean = false;
  removeModalOpen: boolean = false;

  genders = ['Male', 'Female', 'No Preference'];
  sizes = '';

  birthdate: Date;

  findPartners() {
    console.log('Find partners');
  }

  edit(): void {
    console.log('Edit child');
    this.editing = true;
  }

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
