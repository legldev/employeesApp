import { TestBed } from '@angular/core/testing';

import { EmployeesService } from './employees.service';

describe('BackendEmployeesService', () => {
  let service: EmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
