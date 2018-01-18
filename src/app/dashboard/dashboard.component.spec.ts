import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { DashboardNavigationComponent } from './dashboard-navigation/dashboard-navigation.component';
import { MainviewComponent } from './mainview/mainview.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuardService } from '../auth-guard.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes([])],
      declarations: [
         DashboardComponent,
         DashboardNavigationComponent,
         MainviewComponent,
      ],
      providers:[AuthGuardService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
