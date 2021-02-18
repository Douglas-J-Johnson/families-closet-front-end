import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  saveModalOpen:boolean = false
  removeModalOpen:boolean = false

  genders = ['Male', 'Female', 'No Preference'];
  sizes = ''

  birthdate: Date;

  constructor() { }

  ngOnInit(): void {
  }

  findPartners() {
    console.log('Find partners')
  }

  edit(): void {
    console.log('Edit child')
  }

  save(): void {
    console.log('Save child')
  }

  remove(): void {
    console.log('Remove child')
  }

}
