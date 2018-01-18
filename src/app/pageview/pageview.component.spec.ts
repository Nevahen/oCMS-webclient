import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageviewComponent } from './pageview.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PageService } from '../page.service';

describe('PageviewComponent', () => {
  let component: PageviewComponent;
  let fixture: ComponentFixture<PageviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes([])],
      declarations: [ PageviewComponent, NavbarComponent ],
      providers: [PageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
