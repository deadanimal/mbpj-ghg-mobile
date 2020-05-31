import { TestBed } from '@angular/core/testing';

import { TicketMessagesService } from './ticket-messages.service';

describe('TicketMessagesService', () => {
  let service: TicketMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
