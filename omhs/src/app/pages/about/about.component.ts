import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

declare var $:any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
