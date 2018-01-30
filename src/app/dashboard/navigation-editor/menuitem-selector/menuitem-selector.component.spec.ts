import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuitemSelectorComponent } from './menuitem-selector.component';

describe('MenuitemSelectorComponent', () => {
  let component: MenuitemSelectorComponent;
  let fixture: ComponentFixture<MenuitemSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuitemSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuitemSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
