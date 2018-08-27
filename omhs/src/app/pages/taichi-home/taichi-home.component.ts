import { Component, OnInit } from '@angular/core';
import { WindowResizeService } from '../../services/window-resize.service';

declare var $:any;

@Component({
  selector: 'app-taichi-home',
  templateUrl: './taichi-home.component.html',
  styleUrls: ['../pages.css', './taichi-home.component.css']
})
export class TaichiHomeComponent implements OnInit {

  constructor(private _resizeService: WindowResizeService) { }

  screenWidth;
  sizeMobile = true;
  activeMainMenu = $('#taichi');

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