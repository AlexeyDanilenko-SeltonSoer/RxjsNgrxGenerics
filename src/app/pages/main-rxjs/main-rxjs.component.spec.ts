import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRxjsComponent } from './main-rxjs.component';

describe('MainRxjsComponent', () => {
  let component: MainRxjsComponent;
  let fixture: ComponentFixture<MainRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
