package dev.team2.RevStay.service;

import dev.team2.RevStay.entity.HotelAccount;
import dev.team2.RevStay.repository.HotelAccountRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelAccountService {

    @Autowired
    HotelAccountRepository hotelaccountRepository;

    @Transactional
    public HotelAccount saveHotel(HotelAccount hotel) {

        return hotelaccountRepository.save(hotel);
    }

    public List<HotelAccount> getAllHotels() {

        return hotelaccountRepository.findAll();
    }

    public List<HotelAccount> getHotelAccountsByUserId(long userId) {
        return hotelaccountRepository.findHotelAccountsByUserId(userId);
    }
}