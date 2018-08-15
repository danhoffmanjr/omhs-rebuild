import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  screenWidth;
  sizeMobile = true;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 669) {
      this.sizeMobile = false;
    }

    fromEvent(window, 'resize')
      .pipe(
        map(() => window.innerWidth)
      )
      .subscribe(
        windowWidth => {
          this.screenWidth = windowWidth;
          this.sizeMobile = (windowWidth > 669) ? false : true;
        },
        error => console.log(error),
        () => console.log('Completed')
      );
  }

}
