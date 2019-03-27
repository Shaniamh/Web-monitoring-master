import { TestBed } from '@angular/core/testing';

import { StatusKafkaService } from './status-kafka.service';

describe('StatusKafkaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatusKafkaService = TestBed.get(StatusKafkaService);
    expect(service).toBeTruthy();
  });
});
