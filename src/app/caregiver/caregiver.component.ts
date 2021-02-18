import { Component } from '@angular/core';

@Component({
  selector: 'app-caregiver',
  templateUrl: './caregiver.component.html',
  styleUrls: ['./caregiver.component.scss']
})
export class CaregiverComponent {
  editing: boolean = false;
  changed: boolean = false;
  saveModalOpen: boolean = false;
  removeModalOpen: boolean = false;

  edit(): void {
    console.log('Edit caregiver');
    this.editing = true;
  }

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
