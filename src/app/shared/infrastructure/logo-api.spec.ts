import { TestBed } from '@angular/core/testing';

import { LogoApi } from './logo-api';

describe('LogoApi', () => {
  let service: LogoApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
