import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowResizeService {

  isMobile$ = fromEvent(window, 'resize').pipe(
    map((event: any) => {
      return (event.target.innerWidth > 669) ? false : true;
     })
  );

}