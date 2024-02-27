package dev.team2.RevStay.repository;

import dev.team2.RevStay.entity.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {

    UserAccount findUserAccountByUserId(long UserId);

    UserAccount findUserAccountByUserEmailAndUserPassword(String UserEmail, String UserPassword);

    UserAccount findUserAccountByUserEmail(String UserEmail);
}