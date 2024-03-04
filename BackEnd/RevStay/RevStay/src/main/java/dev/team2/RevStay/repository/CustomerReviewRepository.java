package dev.team2.RevStay.repository;

import dev.team2.RevStay.entity.CustomerReview;
import dev.team2.RevStay.entity.HotelRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerReviewRepository extends JpaRepository<CustomerReview, Long> {

    List<CustomerReview> findCustomerReviewsByHotelId(long HotelId);

}