import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-familiy',
  templateUrl: './familiy.component.html',
  styleUrls: ['./familiy.component.scss']
})
export class FamiliyComponent implements OnInit {
  locationOpen = true;
  caregiversOpen = true;
  childrenOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  addCaregiver(): void {
    console.log('Add Caregiver')
  }

  caregiverPermissions(): void {
    console.log('Caregiver Permissions')
  }

  addChild(): void {
    console.log('Add child')
  }
}
