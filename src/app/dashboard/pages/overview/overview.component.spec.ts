import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesOverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: PagesOverviewComponent;
  let fixture: ComponentFixture<PagesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
