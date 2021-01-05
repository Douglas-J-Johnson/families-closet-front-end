import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {

  genders = ['Male', 'Female', 'No Preference'];
  selection: string = null;
  open = false;

  value: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
