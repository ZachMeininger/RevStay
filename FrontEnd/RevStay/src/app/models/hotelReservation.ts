import { Booking } from "./booking"
export interface HotelReservation{
    reservationMap: Map<string,Booking[]>
}