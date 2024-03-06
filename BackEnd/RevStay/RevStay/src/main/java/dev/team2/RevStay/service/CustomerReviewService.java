package dev.team2.RevStay.service;

import dev.team2.RevStay.entity.CustomerReview;
import dev.team2.RevStay.entity.HotelAccount;
import dev.team2.RevStay.repository.CustomerReviewRepository;
import dev.team2.RevStay.repository.HotelAccountRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Transactional
@Service
public class CustomerReviewService {
    @Autowired
    CustomerReviewRepository reviewRepository;

    public CustomerReview addReview(CustomerReview review){
        return reviewRepository.save(review);

    }
    public List<CustomerReview> getAllReviews(Integer hotel_id){

        return reviewRepository.findCustomerReviewsByHotelId(hotel_id);

    }
}