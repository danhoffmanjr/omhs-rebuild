import { Component, OnInit } from '@angular/core';
import { WindowResizeService } from '../../services/window-resize.service';
import { Subscription } from 'rxjs';
import { TooltipService } from '../../services/tooltip.service';

declare var $:any;

@Component({
  selector: 'app-qigong-history',
  templateUrl: './qigong-history.component.html',
  styleUrls: ['../pages.css', './qigong-history.component.css']
})
export class QigongHistoryComponent implements OnInit {

  constructor(private _resizeService: WindowResizeService, private _tooltipService: TooltipService) { }

  screenWidth;
  sizeMobile = true;
  sub: Subscription;
  activeMainMenu = $('#qigong');

  ngOnInit() {
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
