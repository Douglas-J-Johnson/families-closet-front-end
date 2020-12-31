import { Component, OnInit } from '@angular/core';

import { BackEndService } from './back-end.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'families-closet-front-end';

  constructor(private backEndService: BackEndService) {}

  ngOnInit(): void {
    this.backEndService.getFamilies()
      .subscribe(response => {
        console.log(response);
      }
      )
  }
}
