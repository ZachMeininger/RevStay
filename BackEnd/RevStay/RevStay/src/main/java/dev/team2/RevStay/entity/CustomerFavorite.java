package dev.team2.RevStay.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CustomerFavorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer favoriteId;

    private Integer hotelId;

    private Integer customerId;

    public CustomerFavorite() {

    }

    public CustomerFavorite(Integer HotelId, Integer CustomerId) {
        this.hotelId = HotelId;
        this.customerId = CustomerId;
    }

    public CustomerFavorite(Integer FavoriteId, Integer HotelId, Integer CustomerId) {
        this.favoriteId = FavoriteId;
        this.hotelId = HotelId;
        this.customerId = CustomerId;
    }

    public Integer getFavoriteId() {
        return favoriteId;
    }

    public void setFavoriteId(Integer FavoriteId) {
        this.favoriteId = FavoriteId;
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
