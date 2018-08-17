import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

declare var $:any;

@Component({
  selector: 'app-acupuncture-home',
  templateUrl: './acupuncture-home.component.html',
  styleUrls: ['./acupuncture-home.component.css']
})
export class AcupunctureHomeComponent implements OnInit {

  constructor() { }

  screenWidth;
  sizeMobile = true;
  activeMainMenu = $('#acupuncture');

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 669) {
      this.sizeMobile = false;
      this.activeMainMenu.next().css("display", "flex").parent().addClass("open");
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
