import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLoginComponent } from './dashboard-login.component';
import { Form, FormsModule } from '@angular/forms';
import { AuthGuardService } from '../../auth-guard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('DashboardLoginComponent', () => {
  let component: DashboardLoginComponent;
  let fixture: ComponentFixture<DashboardLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,RouterTestingModule.withRoutes([])],
      declarations: [DashboardLoginComponent],
      providers:[AuthGuardService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
