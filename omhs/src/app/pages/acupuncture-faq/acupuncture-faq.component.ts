import { Component, OnInit } from '@angular/core';
import { WindowResizeService } from '../../services/window-resize.service';

declare var $:any;

@Component({
  selector: 'app-acupuncture-faq',
  templateUrl: './acupuncture-faq.component.html',
  styleUrls: ['../pages.css', './acupuncture-faq.component.css']
})
export class AcupunctureFaqComponent implements OnInit {

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
