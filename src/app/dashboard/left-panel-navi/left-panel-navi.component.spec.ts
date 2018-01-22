import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanelNaviComponent } from './left-panel-navi.component';

describe('LeftPanelNaviComponent', () => {
  let component: LeftPanelNaviComponent;
  let fixture: ComponentFixture<LeftPanelNaviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPanelNaviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPanelNaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
