package dev.team2.RevStay.repository;

import dev.team2.RevStay.entity.CustomerAccount;
import dev.team2.RevStay.entity.CustomerBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerBookingRepository extends JpaRepository<CustomerBooking, Long> {

    List<CustomerBooking> findCustomerBookingsByCustomerAccountId(long CustomerId);

}
