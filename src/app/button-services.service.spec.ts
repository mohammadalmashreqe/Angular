import { TestBed } from '@angular/core/testing';

import { ButtonServicesService } from './button-services.service';

describe('ButtonServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ButtonServicesService = TestBed.get(ButtonServicesService);
    expect(service).toBeTruthy();
  });
});
