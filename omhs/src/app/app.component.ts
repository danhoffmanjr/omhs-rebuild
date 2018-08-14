import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Observable, fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'omhs';
  bars = faBars;
  close = faTimes;
  screenWidth;
  sizeMobile = true;
  sizeTablet = false;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 668) {
      this.sizeMobile = false;
      this.sizeTablet = true;
    }

    fromEvent(window, 'resize')
      .pipe(
        map(event => window.innerWidth)
      )
      .subscribe(
        event => {
          this.screenWidth = event;
          this.sizeMobile = (event > 668) ? false : true;
          this.sizeTablet = (event > 668) ? true : false;
        },
        error => console.log(error),
        () => console.log('Completed')
      );
  }
}