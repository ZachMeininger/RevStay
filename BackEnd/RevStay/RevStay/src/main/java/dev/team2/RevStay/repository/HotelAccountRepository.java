package dev.team2.RevStay.repository;

import dev.team2.RevStay.entity.HotelAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelAccountRepository extends JpaRepository<HotelAccount, Long> {

    HotelAccount findHotelAccountByHotelId(long HotelId);

    HotelAccount findHotelAccountByUserId(long UserId);
}