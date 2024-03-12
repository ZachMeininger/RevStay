package dev.team2.RevStay.service;

import dev.team2.RevStay.entity.CustomerFavorite;
import dev.team2.RevStay.repository.CustomerFavoriteRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Transactional
@Service
public class CustomerFavoriteService {

    @Autowired
    CustomerFavoriteRepository favoriteRepository;

    public CustomerFavorite addFavorite(CustomerFavorite favorite){
        return favoriteRepository.save(favorite);

    }
}
