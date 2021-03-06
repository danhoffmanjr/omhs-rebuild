import { Component, OnInit, Input } from '@angular/core';
import { faBars, faTimes, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.css']
})
export class NavMainComponent implements OnInit {

  constructor() { }

  @Input() event: any;

  bars = faBars;
  open = faChevronDown;
  close = faChevronUp;
  screenWidth;

  showMenu: Boolean = false;

  toggleMenu() {
    if (this.screenWidth < 670) {
      this.showMenu = !this.showMenu;
    }
  }

  onKeydown(event) {
    this.showMenu = !this.showMenu;
  }


  ngOnInit() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 669) {
      this.showMenu = true;
    }
  }

  ngAfterContentInit() {
    let el = document.getElementById('accordion');
    let mainLinks = $(el).find('.link');
    let links = $(el).find('[role="menuitem"]');
    let hasDropdown = mainLinks.filter((mainLinks, link) => {
      return link.className == 'link has-sub';
    });
    let subs = $(el).find('.submenu');

    hasDropdown.on('click', { el: el, multiple: false }, function (e) {
      var $this, $next;
      $this = $(this);
      $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass('open');

      subs.not($next).slideUp().parent().removeClass('open');
    });

    const linkClick$ = fromEvent(links, 'click');

    linkClick$.subscribe(
      () => this.toggleMenu(),
      error => console.log(error),
      () => console.log('Completed')
    );
  }

}