package dev.team2.RevStay.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;

@Entity
public class HotelRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer roomId;

    private Integer roomNumber;

    private String roomName;

    private Integer roomBed;

    private Double roomPrice;

    private String roomImage;

    private Boolean roomHot;

    private Boolean roomBar;

    private Boolean roomKitch;

    private Integer hotelId;

    public HotelRoom() {

    }

    public HotelRoom(Integer RoomNumber, String RoomName, Integer RoomBed, Double RoomPrice, String RoomImage, Boolean RoomHot, Boolean RoomBar, Boolean RoomKitch, Integer HotelId) {
        this.roomNumber = RoomNumber;
        this.roomName = RoomName;
        this.roomBed = RoomBed;
        this.roomPrice = RoomPrice;
        this.roomImage = RoomImage;
        this.roomHot = RoomHot;
        this.roomBar = RoomBar;
        this.roomKitch = RoomKitch;
        this.hotelId = HotelId;
    }

    public HotelRoom(Integer RoomId, Integer RoomNumber, String RoomName, Integer RoomBed, Double RoomPrice, String RoomImage, Boolean RoomHot, Boolean RoomBar, Boolean RoomKitch, Integer HotelId) {
        this.roomId = RoomId;
        this.roomNumber = RoomNumber;
        this.roomName = RoomName;
        this.roomBed = RoomBed;
        this.roomPrice = RoomPrice;
        this.roomImage = RoomImage;
        this.roomHot = RoomHot;
        this.roomBar = RoomBar;
        this.roomKitch = RoomKitch;
        this.hotelId = HotelId;
    }

    public Integer getRoomId() {
        return roomId;
    }

    public void setRoomId(Integer RoomId) {
        this.roomId = RoomId;
    }

    public Integer getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(Integer RoomNumber) {
        this.roomNumber = RoomNumber;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String RoomName) {
        this.roomName = RoomName;
    }

    public Integer getRoomBed() {
        return roomBed;
    }

    public void setRoomBed(Integer RoomBed) {
        this.roomBed = RoomBed;
    }

    public Double getRoomPrice() {
        return roomPrice;
    }

    public void setRoomPrice(Double RoomPrice) {
        this.roomPrice = RoomPrice;
    }

    public String getRoomImage() {
        return roomImage;
    }

    public void setRoomImage(String RoomImage) {
        this.roomImage = RoomImage;
    }

    public Boolean getRoomHot() {
        return roomHot;
    }

    public void setRoomHot(Boolean RoomHot)
    {
        this.roomHot = RoomHot;
    }

    public Boolean getRoomBar() {
        return roomBar;
    }

    public void setRoomBar(Boolean RoomBar) {
        this.roomBar = RoomBar;
    }

    public Boolean getRoomKitch() {
        return roomKitch;
    }

    public void setRoomKitch(Boolean RoomKitch) {
        this.roomKitch = RoomKitch;
    }

    public Integer getHotelId() {
        return hotelId;
    }

    public void setHotelId(Integer HotelId) {
        this.hotelId = HotelId;
    }

}