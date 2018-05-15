import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryHistoryComponent } from './lottery-history.component';

describe('LotteryHistoryComponent', () => {
  let component: LotteryHistoryComponent;
  let fixture: ComponentFixture<LotteryHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
