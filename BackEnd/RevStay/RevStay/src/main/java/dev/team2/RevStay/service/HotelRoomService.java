package dev.team2.RevStay.service;

import dev.team2.RevStay.entity.HotelRoom;
import dev.team2.RevStay.repository.HotelRoomRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Transactional
@Service
public class HotelRoomService {

    @Autowired
    HotelRoomRepository hotelroomRepository;

    @Transactional
    public HotelRoom addHotelRoom(HotelRoom hotelRoom) {
        return hotelroomRepository.save(hotelRoom);
    }

    public List<HotelRoom> getHotelRoomsByHotelId(int hotelId) {
        return hotelroomRepository.findHotelRoomsByHotelId(hotelId);
    }

}