import { TestBed } from '@angular/core/testing';

import { FilmsApi } from './films-api';

describe('FilmsApi', () => {
  let service: FilmsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
