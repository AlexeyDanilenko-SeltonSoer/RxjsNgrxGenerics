import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Observable, of } from 'rxjs';
import {
  finalize,
  take,
  tap
} from 'rxjs/operators';

@Component({
  selector: 'portfolio-simple-loader',
  templateUrl: './simple-loader.component.html',
  styleUrls: ['./simple-loader.component.scss']
})
export class SimpleLoaderComponent implements OnInit {

  public screenHrefsLoader = [
    'assets/screens/loader/start-loader.png',
    'assets/screens/loader/stop-loader.png',
    'assets/screens/loader/html-loader.png',
    'assets/screens/loader/scss-loader.png'
  ]

  public intervalWith = 0;
  public interval$: Observable<number>
  public disabledButton$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() { }

  ngOnInit(): void {
  }

  public startLoader(): void {
    this.disabledButton$.next(true) /* set button disabled */
    this.interval$ = interval(100) /* set interval every 100ms */
      .pipe(
        tap((_interval: number) => this.intervalWith = _interval), /* variable for ngStyle (width) */
        take(101), /* take 100 values (range 0 - 100) */
        finalize(() => this.disabledButton$.next(false)) /* set button not disabled */
      );
  }

  public stopLoader(): void {
    this.interval$ = of(this.intervalWith) /* stop interval on current width */
    this.disabledButton$.next(false) /* set button not disabled */
  }

}
