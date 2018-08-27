import { Component, OnInit } from '@angular/core';
import { WindowResizeService } from '../../services/window-resize.service';

declare var $:any;

@Component({
  selector: 'app-acupuncture-points',
  templateUrl: './acupuncture-points.component.html',
  styleUrls: ['../pages.css', './acupuncture-points.component.css']
})
export class AcupuncturePointsComponent implements OnInit {

  screenWidth;
  sizeMobile;
  sub;
  activeMainMenu = $('#acupuncture');

  constructor(private _resizeService: WindowResizeService) {}

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 669) {
      this.sizeMobile = false;
      this.activeMainMenu.next().css("display", "flex").parent().addClass("open");
    }

    this.sub = this._resizeService.isMobile$.subscribe(
      val => this.sizeMobile = val
    );

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}