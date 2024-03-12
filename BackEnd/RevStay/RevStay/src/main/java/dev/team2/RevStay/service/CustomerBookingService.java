package dev.team2.RevStay.service;

import dev.team2.RevStay.entity.CustomerAccount;
import dev.team2.RevStay.entity.CustomerBooking;
import dev.team2.RevStay.repository.CustomerAccountRepository;
import dev.team2.RevStay.repository.CustomerBookingRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Transactional
@Service
public class CustomerBookingService {
    @Autowired
    CustomerBookingRepository customerbookingRepository;

    @Transactional
    public CustomerBooking addCustomerBooking(CustomerBooking customerBooking)
    {
        return customerbookingRepository.save(customerBooking);
    }

    public List<CustomerBooking> getCustomerBookingsByCustomerAccountId(Integer customerAccountId) {
        return customerbookingRepository.findCustomerBookingsByCustomerAccountId(customerAccountId);

    }

}
