import { TestBed, inject } from '@angular/core/testing';

import { PageService } from './page.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule.withRoutes([])],
      providers: [PageService]
    });
  });

  it('should be created', inject([PageService], (service: PageService) => {
    expect(service).toBeTruthy();
  }));
});
