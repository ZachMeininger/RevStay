package dev.team2.RevStay.service;

import dev.team2.RevStay.entity.CustomerAccount;
import dev.team2.RevStay.repository.CustomerAccountRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Transactional
@Service
public class CustomerAccountService {
    @Autowired
    CustomerAccountRepository customeraccountRepository;

    @Transactional
    public CustomerAccount addCustomerAccount(CustomerAccount customerAccount)
    {
        return customeraccountRepository.save(customerAccount);
    }

}