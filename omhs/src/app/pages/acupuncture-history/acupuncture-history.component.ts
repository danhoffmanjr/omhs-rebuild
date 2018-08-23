import { Component, OnInit } from '@angular/core';
import { WindowResizeService } from '../../services/window-resize.service';


declare var $:any;

@Component({
  selector: 'app-acupuncture-history',
  templateUrl: './acupuncture-history.component.html',
  styleUrls: ['./acupuncture-history.component.css']
})
export class AcupunctureHistoryComponent implements OnInit {

  constructor(private _resizeService: WindowResizeService) { }

  screenWidth;
  sizeMobile = true;
  activeMainMenu = $('#acupuncture');

  ngOnInit(): void {
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

      $('.tooltip')
      .mouseover(function(e){
        if( $(this).attr('data-tip-type') == 'text' ){
          $('#tooltip-container').html($(this).attr('data-tip-source'));
        }

        if( $(this).attr('data-tip-type') == 'html' ){
          let elementToGet = '#'+ $(this).attr('data-tip-source');
          let newHTML = $(elementToGet).html();
          $('#tooltip-container').html(newHTML);
        }

        $('#tooltip-container').css({'display': 'block', 'opacity':0}).animate({opacity:1}, 300);

      })
      .mousemove(function(e){

        let toolTipWidth = $('#tooltip-container').outerWidth();
        let toolTipHeight = $('#tooltip-container').outerHeight();
        let pageWidth = $('body').width();
        let scroll = $(window).scrollTop();

        if ( e.pageX > pageWidth/2 ){
          $('#tooltip-container').css('left', (e.pageX-toolTipWidth+20)+'px');
        }else{
          $('#tooltip-container').css('left', (e.pageX-20)+'px');
        }

        if( e.pageY > (scroll + toolTipHeight) ){
          $('#tooltip-container').css('top', (e.pageY-(toolTipHeight+20))+'px');
        }else{
           $('#tooltip-container').css('top', (e.pageY+20)+'px');
        }

      })
      .mouseout(function(e){

        $('#tooltip-container').animate({opacity:0}, 250, function(){
          $('#tooltip-container').css('display', 'none').html('');
        });

      });
  }

}
