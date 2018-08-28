import { Component, OnInit } from '@angular/core';
import { WindowResizeService } from '../../services/window-resize.service';
import { TooltipService } from '../../services/tooltip.service';

declare var $:any;

@Component({
  selector: 'app-acupuncture-history',
  templateUrl: './acupuncture-history.component.html',
  styleUrls: ['./acupuncture-history.component.css', '../pages.css']
})
export class AcupunctureHistoryComponent implements OnInit {

  constructor(private _resizeService: WindowResizeService, private _tooltipService: TooltipService) { }

  screenWidth;
  sizeMobile = true;
  sub;
  activeMainMenu = $('#acupuncture');

  ngOnInit(): void {
    this._tooltipService.tooltip();

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