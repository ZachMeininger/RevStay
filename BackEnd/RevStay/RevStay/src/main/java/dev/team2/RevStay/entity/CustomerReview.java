package dev.team2.RevStay.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;

@Entity
public class CustomerReview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer reviewId;

    private Integer reviewStar;

    private String reviewBody;

    private Integer hotelId;

    private Integer customerId;

    public CustomerReview() {

    }

    public CustomerReview(Integer ReviewStar, String ReviewBody, Integer HotelId, Integer CustomerId) {
        this.reviewStar = ReviewStar;
        this.reviewBody = ReviewBody;
        this.hotelId = HotelId;
        this.customerId = CustomerId;
    }

    public CustomerReview(Integer ReviewId, Integer ReviewStar, String ReviewBody, Integer HotelId, Integer CustomerId) {
        this.reviewId = ReviewId;
        this.reviewStar = ReviewStar;
        this.reviewBody = ReviewBody;
        this.hotelId = HotelId;
        this.customerId = CustomerId;
    }

    public Integer getReviewId() {
        return reviewId;
    }

    public void setReviewId(Integer ReviewId) {
        this.reviewId = ReviewId;
    }

    public Integer getReviewStar() {
        return reviewStar;
    }

    public void setReviewStar(Integer ReviewStar) {
        this.reviewStar = ReviewStar;
    }

    public String getReviewBody() {
        return reviewBody;
    }

    public void setReviewBody(String ReviewBody) {
        this.reviewBody = ReviewBody;
    }

    public Integer getHotelId() {
        return hotelId;
    }

    public void setHotelId(Integer HotelId) {
        this.hotelId = HotelId;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer CustomerId) {
        this.customerId = CustomerId;
    }

}