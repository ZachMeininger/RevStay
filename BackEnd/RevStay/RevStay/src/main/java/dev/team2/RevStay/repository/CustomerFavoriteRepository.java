package dev.team2.RevStay.repository;

import dev.team2.RevStay.entity.CustomerFavorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerFavoriteRepository extends JpaRepository<CustomerFavorite, Long> {}
