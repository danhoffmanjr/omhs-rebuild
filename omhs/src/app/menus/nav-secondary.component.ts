import { Component, OnInit } from '@angular/core';
import { faBars, faTimes, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

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

}
