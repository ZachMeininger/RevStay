package dev.team2.RevStay.repository;

import dev.team2.RevStay.entity.HotelAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HotelAccountRepository extends JpaRepository<HotelAccount, Long> {

    HotelAccount findHotelAccountByHotelId(long HotelId);

<<<<<<< HEAD
    List<HotelAccount> findHotelAccountsByUserId(long UserId);
=======
    HotelAccount findHotelAccountByUserId(long UserId);


>>>>>>> 99d3e3c9ed5c0aa2ff59e8a289c9fb47244b856f
}