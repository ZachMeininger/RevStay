export interface Booking{
    bookingStart: Date,
    bookingEnd: Date,
    bookingGuests: Number,
    bookingPaid: boolean,
    bookingAccepted:boolean,
    roomId: Number
}