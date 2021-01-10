import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MyNgrxState } from '@my-store/index';
import { Observable } from 'rxjs';
import * as fromSelector from '@my-selectors'
import { Logout } from '@my-actions';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public token$: Observable<boolean>

  constructor(
    private store: Store<MyNgrxState>
  ) { }

  public ngOnInit(): void {
    this.token$ = this.store.select(fromSelector.auth.selectToken)
  }

  public logout(): void {
    this.store.dispatch(Logout())
  }

}
