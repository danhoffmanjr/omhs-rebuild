import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WindowResizeService } from '../../services/window-resize.service';
import { TooltipService } from '../../services/tooltip.service';

declare var $:any;

@Component({
  selector: 'app-taichi-history',
  templateUrl: './taichi-history.component.html',
  styleUrls: ['../pages.css', './taichi-history.component.css']
})
export class TaichiHistoryComponent implements OnInit {

  constructor(private _resizeService: WindowResizeService, private _tooltipService: TooltipService) { }

  screenWidth;
  sizeMobile = true;
  sub: Subscription;
  activeMainMenu = $('#taichi');

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
