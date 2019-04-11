import { TestBed } from '@angular/core/testing';

import { StatusHbaseService } from './status-hbase.service';

describe('StatusHbaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatusHbaseService = TestBed.get(StatusHbaseService);
    expect(service).toBeTruthy();
  });
});
