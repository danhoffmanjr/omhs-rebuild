import { Component, OnInit } from '@angular/core';
import { faBars, faTimes, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

declare var $: any;

@Component({
  selector: 'app-nav-secondary',
  templateUrl: './nav-secondary.component.html',
  styleUrls: ['./nav-secondary.component.css']
})
export class NavSecondaryComponent implements OnInit {

  bars = faBars;
  open = faChevronDown;
  close = faChevronUp;

  showMenu: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    let el = $('.extras');

    el.on('click', function (e) {
      var $link, $sub;
      $link = $(this);
      $sub = $link.next();

      $sub.slideToggle();
      $link.parent().toggleClass('open');
    });
  }
}