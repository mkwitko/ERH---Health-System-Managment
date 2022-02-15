import { TestBed } from '@angular/core/testing';

import { BackInfoService } from './back-info.service';

describe('BackInfoService', () => {
  let service: BackInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
