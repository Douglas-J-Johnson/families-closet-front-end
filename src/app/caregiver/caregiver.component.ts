import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caregiver',
  templateUrl: './caregiver.component.html',
  styleUrls: ['./caregiver.component.scss']
})
export class CaregiverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  edit(): void {
    console.log('Edit caregiver')
  }

  save(): void {
    console.log('Save caregiver')
  }

  remove(): void {
    console.log('Remove caregiver')
  }

}
