package dev.team2.RevStay.dto;

import java.time.LocalDate;

public class NewBookingNotificationDTO {
    private Integer bookingId;
    private LocalDate bookingStart;
    private LocalDate bookingEnd;
    private Integer roomId;
    private Integer customerAccountId;

    public NewBookingNotificationDTO() {
    }

    public NewBookingNotificationDTO(Integer bookingId, LocalDate bookingStart, LocalDate bookingEnd, Integer roomId, Integer customerAccountId) {
        this.bookingId = bookingId;
        this.bookingStart = bookingStart;
        this.bookingEnd = bookingEnd;
        this.roomId = roomId;
        this.customerAccountId = customerAccountId;
    }

    public Integer getBookingId() {
        return bookingId;
    }

    public void setBookingId(Integer bookingId) {
        this.bookingId = bookingId;
    }

    public LocalDate getBookingStart() {
        return bookingStart;
    }

    public void setBookingStart(LocalDate bookingStart) {
        this.bookingStart = bookingStart;
    }

    public LocalDate getBookingEnd() {
        return bookingEnd;
    }

    public void setBookingEnd(LocalDate bookingEnd) {
        this.bookingEnd = bookingEnd;
    }

    public Integer getRoomId() {
        return roomId;
    }

    public void setRoomId(Integer roomId) {
        this.roomId = roomId;
    }

    public Integer getCustomerAccountId() {
        return customerAccountId;
    }

    public void setCustomerAccountId(Integer customerAccountId) {
        this.customerAccountId = customerAccountId;
    }
}
