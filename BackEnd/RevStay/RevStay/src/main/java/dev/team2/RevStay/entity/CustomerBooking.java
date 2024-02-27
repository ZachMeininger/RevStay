package dev.team2.RevStay.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;

@Entity
public class CustomerBooking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bookingId;

    private LocalDate bookingStart;

    private LocalDate bookingEnd;

    private Boolean bookingPaid;

    private Boolean bookingAccepted;

    private Integer roomId;

    public CustomerBooking() {

    }

    public CustomerBooking(LocalDate BookingStart, LocalDate BookingEnd, Boolean BookingPaid, Boolean BookingAccepted, Integer RoomId) {
        this.bookingStart = BookingStart;
        this.bookingEnd = BookingEnd;
        this.bookingPaid = BookingPaid;
        this.bookingAccepted = BookingAccepted;
        this.roomId = RoomId;
    }

    public CustomerBooking(Integer BookingId, LocalDate BookingStart, LocalDate BookingEnd, Boolean BookingPaid, Boolean BookingAccepted, Integer RoomId) {
        this.bookingId = BookingId;
        this.bookingStart = BookingStart;
        this.bookingEnd = BookingEnd;
        this.bookingPaid = BookingPaid;
        this.bookingAccepted = BookingAccepted;
        this.roomId = RoomId;
    }

    public Integer getBookingId() {
        return bookingId;
    }

    public void setBookingId(Integer BookingId) {
        this.bookingId = BookingId;
    }

    public LocalDate getBookingStart() {
        return bookingStart;
    }

    public void setBookingStart(LocalDate BookingStart) {
        this.bookingStart = BookingStart;
    }

    public LocalDate getBookingEnd() {
        return bookingEnd;
    }

    public void setBookingEnd(LocalDate BookingEnd) {
        this.bookingEnd = BookingEnd;
    }

    public Boolean getBookingPaid() {
        return bookingPaid;
    }

    public void setBookingPaid(Boolean BookingPaid) {
        this.bookingPaid = BookingPaid;
    }

    public Boolean getBookingAccepted() {
        return bookingAccepted;
    }

    public void setBookingAccepted(Boolean BookingAccepted) {
        this.bookingAccepted = BookingAccepted;
    }

    public Integer getRoomId() {
        return roomId;
    }

    public void setRoomId(Integer RoomId) {
        this.roomId = RoomId;
    }

}