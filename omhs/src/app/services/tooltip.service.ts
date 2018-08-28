import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  constructor() { }

  tooltip(){
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
  };


}