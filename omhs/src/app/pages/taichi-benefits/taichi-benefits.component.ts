import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WindowResizeService } from '../../services/window-resize.service';

declare var $:any;

@Component({
  selector: 'app-taichi-benefits',
  templateUrl: './taichi-benefits.component.html',
  styleUrls: ['../pages.css', './taichi-benefits.component.css']
})
export class TaichiBenefitsComponent implements OnInit {

  constructor(private _resizeService: WindowResizeService) { }

  screenWidth;
  sizeMobile = true;
  sub: Subscription;
  activeMainMenu = $('#taichi');

  ngOnInit(): void {

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
