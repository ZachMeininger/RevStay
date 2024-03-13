import { Booking } from "./booking"
export interface HotelReservation{
    hotelName:string,
    hotelBookings: Booking[]
}