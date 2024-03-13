package dev.team2.RevStay.service;

import dev.team2.RevStay.entity.UserAccount;
import dev.team2.RevStay.repository.UserAccountRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Transactional
@Service
public class UserAccountService {

    @Autowired
    UserAccountRepository useraccountRepository;

    @Transactional
    public UserAccount addUserAccount(UserAccount userAccount)
    {
        if(useraccountRepository.findUserAccountByUserEmail(userAccount.getUserEmail()) == null)
        {
            return useraccountRepository.save(userAccount);
        }
        return null;
    }

    @Transactional
    public UserAccount loginUserAccount(UserAccount userAccount)
    {
        return useraccountRepository.findUserAccountByUserEmailAndUserPassword(userAccount.getUserEmail(), userAccount.getUserPassword());
    }

    @Transactional
    public UserAccount findUserAccountById(long id)
    {
        return useraccountRepository.findUserAccountByUserId(id);
    }

    @Transactional
    public UserAccount findUserAccountByEmailAndSecurity(UserAccount userAccount)
    {
        return useraccountRepository.findUserAccountByUserEmailAndSecurityQuestionAndSecurityAnswer(userAccount.getUserEmail(), userAccount.getSecurityQuestion(), userAccount.getSecurityAnswer());
    }

    @Transactional
    public UserAccount changeUserAccountPassword(UserAccount userAccount)
    {
        return useraccountRepository.save(userAccount);
    }
}