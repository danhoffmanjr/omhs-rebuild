import { Component, OnInit } from '@angular/core';
import { WindowResizeService } from '../../services/window-resize.service';
import { Subscription } from '../../../../node_modules/rxjs';

declare var $:any;

@Component({
  selector: 'app-acupuncture-meridians',
  templateUrl: './acupuncture-meridians.component.html',
  styleUrls: ['./acupuncture-meridians.component.css', '../pages.css']
})
export class AcupunctureMeridiansComponent implements OnInit {

  constructor(private _resizeService: WindowResizeService) { }

  screenWidth;
  sizeMobile = true;
  sub = new Subscription;
  activeMainMenu = $('#acupuncture');

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
