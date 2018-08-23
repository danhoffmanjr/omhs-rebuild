import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowResizeService {

  onResize$ = fromEvent(window, 'resize')
    .pipe(
      map(() => window.innerWidth)
    );

}