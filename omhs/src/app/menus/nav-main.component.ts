import { Component, OnInit, Input } from '@angular/core';
import { faBars, faTimes, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

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

  accordion;

  showMenu: Boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }


  ngOnInit() {

  }

  ngAfterContentInit() {
    $(function() {
      var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
    
        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
      }
    
      Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
          this.$this = $(this),
          this.$next = this.$this.next();
    
        this.$next.slideToggle();
        this.$this.parent().toggleClass('open');
    
        if (!e.data.multiple) {
          $el.find('.submenu').not(this.$next).slideUp().parent().removeClass('open');
        };
      }

      var accordion = new Accordion($('#accordion'), false);
    });
  }

}