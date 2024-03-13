package dev.team2.RevStay.service;

import dev.team2.RevStay.entity.CustomerAccount;
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

import java.util.HashMap;
import java.util.List;

@Transactional
@Service
public class CustomerBookingService {
    @Autowired
    CustomerBookingRepository customerbookingRepository;

    @Autowired
    HotelAccountService hotelAccountService;

    @Autowired
    HotelRoomService hotelRoomService;

    @Transactional
    public CustomerBooking addCustomerBooking(CustomerBooking customerBooking)
    {
        return customerbookingRepository.save(customerBooking);
    }

    public List<CustomerBooking> getCustomerBookingsByCustomerAccountId(Integer customerAccountId) {
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
    }

}
