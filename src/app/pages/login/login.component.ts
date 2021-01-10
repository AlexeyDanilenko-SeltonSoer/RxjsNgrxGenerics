import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../shared/models/user';
import { select, Store } from '@ngrx/store';
import { MyNgrxState } from '@my-store/index';
import * as fromSelectors from '@my-selectors'
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'portfolio-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public form: FormGroup
  public token: Observable<boolean>;

  private subscriptions$: Subscription

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private store: Store<MyNgrxState>,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.subscriptions$ = new Subscription()
    this.token = this.store.pipe(
      select(fromSelectors.auth.selectToken),
      tap((token: boolean) => {
        if (token) {
          this.router.navigate(['main-rxjs']);
        }
      })
    );
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public ngOnDestroy(): void {
    if (this.subscriptions$) {
      this.subscriptions$.unsubscribe()
    }
  }

  public login(): void {
    this.subscriptions$.add(
      this.loginService.login(this.form.value as User).subscribe()
    );
  }

}
