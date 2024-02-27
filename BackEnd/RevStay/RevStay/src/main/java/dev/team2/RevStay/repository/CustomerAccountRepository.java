package dev.team2.RevStay.repository;

import dev.team2.RevStay.entity.CustomerAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerAccountRepository extends JpaRepository<CustomerAccount, Long> {

    CustomerAccount findCustomerAccountByCustomerId(long CustomerId);

    CustomerAccount findCustomerAccountByUserId(long UserId);
}