package dev.team2.RevStay.repository;

import dev.team2.RevStay.entity.HotelRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HotelRoomRepository extends JpaRepository<HotelRoom, Long> {

    HotelRoom findHotelRoomByRoomId(long RoomId);

    List<HotelRoom> findHotelRoomsByHotelId(int hotelId);
}