package dev.team2.RevStay.service;

import dev.team2.RevStay.dto.NewBookingNotificationDTO;
import dev.team2.RevStay.entity.CustomerBooking;
import dev.team2.RevStay.entity.HotelAccount;
import dev.team2.RevStay.entity.HotelRoom;
import dev.team2.RevStay.repository.CustomerAccountRepository;
import dev.team2.RevStay.service.HotelAccountService;
import dev.team2.RevStay.service.HotelRoomService;
import dev.team2.RevStay.repository.CustomerBookingRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.format.DateTimeFormatter;
import java.util.List;

@Transactional
@Service
public class CustomerBookingService {
    @Autowired
    CustomerBookingRepository customerBookingRepository;

    @Autowired
    HotelAccountService hotelAccountService;

    @Autowired
    HotelRoomService hotelRoomService;

    @Transactional
    public CustomerBooking addCustomerBooking(CustomerBooking customerBooking) {
        return customerBookingRepository.save(customerBooking);
    }

    public List<CustomerBooking> getCustomerBookingsByCustomerAccountId(Integer customerAccountId) {
        return customerBookingRepository.findCustomerBookingsByCustomerAccountId(customerAccountId);
    }

    public void notifyNewBooking(NewBookingNotificationDTO newBookingNotificationDTO) {

        String notificationMessage = "New booking notification:\n" +
                "Booking ID: " + newBookingNotificationDTO.getBookingId() + "\n" +
                "Booking Start Date: " + newBookingNotificationDTO.getBookingStart().format(DateTimeFormatter.ISO_DATE) + "\n" +
                "Booking End Date: " + newBookingNotificationDTO.getBookingEnd().format(DateTimeFormatter.ISO_DATE) + "\n" +
                "Room ID: " + newBookingNotificationDTO.getRoomId() + "\n" +
                "Customer Account ID: " + newBookingNotificationDTO.getCustomerAccountId();

        System.out.println(notificationMessage);
    }
}
