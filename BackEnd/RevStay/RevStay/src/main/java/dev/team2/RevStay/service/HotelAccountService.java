package dev.team2.RevStay.service;

import dev.team2.RevStay.entity.HotelAccount;
import dev.team2.RevStay.repository.HotelAccountRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Transactional
@Service
public class HotelAccountService {

    @Autowired
    HotelAccountRepository hotelaccountRepository;

    @Transactional
    public HotelAccount addHotelAccount(HotelAccount hotelAccount) {
        return hotelaccountRepository.save(hotelAccount);
    }
}