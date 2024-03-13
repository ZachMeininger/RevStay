package dev.team2.RevStay.entity;

import jakarta.persistence.*;

@Entity
@Table (name = "Hotel_Account")
public class HotelAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer hotelId;

    private String hotelName;

    private String hotelAddress;

    private String hotelDescription;

    private String hotelImage;

    private Double priceHigh;

    private Double priceLow;

    private Boolean hotelPool;

    private Boolean hotelSauna;

    private Boolean hotelRest;

    private Integer userId;

    public HotelAccount() {

    }

    public HotelAccount(String HotelName, String HotelAddress, String HotelDescription, String HotelImage, Double PriceHigh, Double PriceLow,  Boolean HotelPool, Boolean HotelSauna, Boolean HotelRest, Integer UserId) {
        this.hotelName = HotelName;
        this.hotelAddress = HotelAddress;
        this.hotelDescription = HotelDescription;
        this.hotelImage = HotelImage;
        this.priceHigh = PriceHigh;
        this.priceLow = PriceLow;
        this.hotelPool = HotelPool;
        this.hotelSauna = HotelSauna;
        this.hotelRest = HotelRest;
        this.userId = UserId;
    }

    public HotelAccount(Integer HotelId, String HotelName, String HotelAddress, String HotelDescription, String HotelImage, Double PriceHigh, Double PriceLow, Boolean HotelPool, Boolean HotelSauna, Boolean HotelRest, Integer UserId) {
        this.hotelId = HotelId;
        this.hotelName = HotelName;
        this.hotelAddress = HotelAddress;
        this.hotelDescription = HotelDescription;
        this.hotelImage = HotelImage;
        this.priceHigh = PriceHigh;
        this.priceLow = PriceLow;
        this.hotelPool = HotelPool;
        this.hotelSauna = HotelSauna;
        this.hotelRest = HotelRest;
        this.userId = UserId;
    }

    public Integer getHotelId() {
        return hotelId;
    }

    public void setHotelId(Integer HotelId) {
        this.hotelId = HotelId;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String HotelName) {
        this.hotelName = HotelName;
    }

    public String getHotelAddress() {
        return hotelAddress;
    }

    public void setHotelAddress(String HotelAddress) {
        this.hotelAddress = HotelAddress;
    }

    public String getHotelDescription() {
        return hotelDescription;
    }

    public void setHotelDescription(String HotelDescription) {
        this.hotelDescription = HotelDescription;
    }

    public String getHotelImage() {
        return hotelImage;
    }

    public void setHotelImage(String HotelImage) {
        this.hotelImage = HotelImage;
    }

    public Double getPriceHigh() {return priceHigh;}

    public void setPriceHigh(Double PriceHigh) {this.priceHigh = priceHigh;}

    public Double getPriceLow() {return priceLow;}

    public void setPriceLow(Double PriceLow) {this.priceLow = priceLow;}

    public Boolean getHotelPool() {
        return hotelPool;
    }

    public void setHotelPool(Boolean HotelPool) {
        this.hotelPool = HotelPool;
    }

    public Boolean getHotelSauna() {
        return hotelSauna;
    }

    public void setHotelSauna(Boolean HotelSauna) {
        this.hotelSauna = HotelSauna;
    }

    public Boolean getHotelRest() {
        return hotelRest;
    }

    public void setHotelRest(Boolean HotelRest) {
        this.hotelRest = HotelRest;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer UserId) {
        this.userId = UserId;
    }
}