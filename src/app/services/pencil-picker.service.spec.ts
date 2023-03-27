import { TestBed } from '@angular/core/testing';

import { PencilPickerService } from './pencil-picker.service';

describe('PencilPickerService', () => {
  let service: PencilPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PencilPickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
