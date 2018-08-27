import { fromEvent, BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { getSymbolIterator } from '../../../node_modules/@angular/core/src/util';

@Injectable({
  providedIn: 'root'
})
export class WindowResizeService {

  isMobile$ = fromEvent(window, 'resize').pipe(
    map((event: any) => {
      return event.target.innerWidth > 669 ? false : true;
     })
  );
  
}