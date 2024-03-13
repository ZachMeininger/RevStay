package dev.team2.RevStay.service;

import dev.team2.RevStay.dto.NewBookingNotificationDTO;
import dev.team2.RevStay.entity.CustomerBooking;
<<<<<<< HEAD
import dev.team2.RevStay.entity.HotelAccount;
import dev.team2.RevStay.entity.HotelRoom;
import dev.team2.RevStay.repository.CustomerAccountRepository;
import dev.team2.RevStay.service.HotelAccountService;
import dev.team2.RevStay.service.HotelRoomService;
=======
>>>>>>> 99d3e3c9ed5c0aa2ff59e8a289c9fb47244b856f
import dev.team2.RevStay.repository.CustomerBookingRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

<<<<<<< HEAD
import java.util.HashMap;
=======
import java.time.format.DateTimeFormatter;
>>>>>>> 99d3e3c9ed5c0aa2ff59e8a289c9fb47244b856f
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
<<<<<<< HEAD
        return customerbookingRepository.findCustomerBookingsByCustomerAccountId(customerAccountId);
    }

    public HashMap<String,List<CustomerBooking>> getHotelReservationsByUserId(Integer userId) {
        List<HotelAccount> hotels = hotelAccountService.getHotelAccountsByUserId(userId);
        //List<HotelRoom> hotelRooms = hotelRoomService.getHotelRoomsByHotelId(hotel.getHotelId());
        HashMap<String,List<CustomerBooking>> bookingsByHotelName = new HashMap<>();
        for (HotelAccount hotel : hotels){
            List<CustomerBooking> bookings = customerbookingRepository.findHotelReservationsByHotelAccountId(hotel.getHotelId());
            bookingsByHotelName.put(hotel.getHotelName(),bookings);
        }
        return bookingsByHotelName;
=======
        return customerBookingRepository.findCustomerBookingsByCustomerAccountId(customerAccountId);
>>>>>>> 99d3e3c9ed5c0aa2ff59e8a289c9fb47244b856f
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
