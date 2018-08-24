import { Component, OnInit } from '@angular/core';
import { WindowResizeService } from '../../services/window-resize.service';

declare var $:any;

@Component({
  selector: 'app-acupuncture-points',
  templateUrl: './acupuncture-points.component.html',
  styleUrls: ['./acupuncture-points.component.css', '../pages.css']
})
export class AcupuncturePointsComponent implements OnInit {

  constructor(private _resizeService: WindowResizeService) { }

  screenWidth;
  sizeMobile = true;
  activeMainMenu = $('#acupuncture');

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 669) {
      this.sizeMobile = false;
      this.activeMainMenu.next().css("display", "flex").parent().addClass("open");
    }

    this._resizeService.onResize$.subscribe(
      windowWidth => {
        this.screenWidth = windowWidth;
        this.sizeMobile = (windowWidth > 669) ? false : true;
      },
      error => console.log(error),
      () => console.log('Completed')
    );
  }

}