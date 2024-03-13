import { TestBed } from '@angular/core/testing';

import { NewBookingNotificationService } from './new-booking-notification-service.service';

describe('NewBookingNotificationServiceService', () => {
  let service: NewBookingNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewBookingNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
