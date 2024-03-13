export class NewBookingNotificationDTO {
    bookingId: number;
    bookingStart: Date;
    bookingEnd: Date;
    roomId: number;
    customerAccountId: number;
  
    constructor(
      bookingId: number,
      bookingStart: Date,
      bookingEnd: Date,
      roomId: number,
      customerAccountId: number
    ) {
      this.bookingId = bookingId;
      this.bookingStart = bookingStart;
      this.bookingEnd = bookingEnd;
      this.roomId = roomId;
      this.customerAccountId = customerAccountId;
    }
  }
  