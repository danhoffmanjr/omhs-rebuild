import { Component, OnInit, Input } from '@angular/core';
import { faBars, faTimes, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { fromEvent} from 'rxjs';
import { map } from 'rxjs/operators';

declare var $:any;

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.css']
})
export class NavMainComponent implements OnInit {

  constructor() { }

  @Input() event:any;

  bars = faBars;
  open = faChevronDown;
  close = faChevronUp;

  showMenu: Boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }


  ngOnInit() {
  }
 
  ngAfterContentInit() {
    let el = document.getElementById('accordion');
    let mainLinks = $(el).find('.link');
    let links = $(el).find('[role="menuitem"]');
    let hasDropdown = mainLinks.filter((mainLinks, link) => {
      return link.className == 'link has-sub';
    });
    let subs = $(el).find('.submenu');
    
    hasDropdown.on('click', {el: el, multiple: false}, function(e){
      var $el, $this, $next;
      $el = e.data.el;
      $this = $(this);
      $next = $this.next();
    
      $next.slideToggle();
      $this.parent().toggleClass('open');
  
      subs.not($next).slideUp().parent().removeClass('open');
    })

    // TODO: fix the active link if user reloads site (currently resets to OMHS Home). Prob better to set active link by route on init
    links.on('click', function(){
      var $this = $(this);
      links.removeClass('active');
      $this.addClass('active');
    });
    
    // const linkClick$ = fromEvent(links, 'click');

    // linkClick$.subscribe( 
    //   event => console.log(event),
    //   error => console.log(error),
    //   () => console.log('Completed')
    // );
  }

}