import { Component, OnInit } from '@angular/core';
import { WindowResizeService } from '../../services/window-resize.service';
import { Subscription } from 'rxjs';

declare var $:any;

@Component({
  selector: 'app-taichi-structure',
  templateUrl: './taichi-structure.component.html',
  styleUrls: ['../pages.css', './taichi-structure.component.css']
})
export class TaichiStructureComponent implements OnInit {

  constructor(private _resizeService: WindowResizeService) { }

  screenWidth;
  sizeMobile = true;
  sub: Subscription;
  activeMainMenu = $('#taichi');

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
