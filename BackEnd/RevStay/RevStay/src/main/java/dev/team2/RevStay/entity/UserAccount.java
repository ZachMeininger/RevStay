package dev.team2.RevStay.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    private String userEmail;

    private String userPassword;

    private String securityQuestion;

    private String securityAnswer;

    private Integer accountType;

    public UserAccount() {

    }

    public UserAccount(String UserEmail, String UserPassword, String SecurityQuestion, String SecurityAnswer, Integer AccountType) {
        this.userEmail = UserEmail;
        this.userPassword = UserPassword;
        this.securityQuestion = SecurityQuestion;
        this.securityAnswer = SecurityAnswer;
        this.accountType = AccountType;
    }

    public UserAccount(Integer UserId, String UserEmail, String UserPassword, String SecurityQuestion, String SecurityAnswer, Integer AccountType) {
        this.userId = UserId;
        this.userEmail = UserEmail;
        this.userPassword = UserPassword;
        this.securityQuestion = SecurityQuestion;
        this.securityAnswer = SecurityAnswer;
        this.accountType = AccountType;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer UserId) {
        this.userId = UserId;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String UserEmail)
    {
        this.userEmail = UserEmail;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String UserPassword) {
        this.userPassword = UserPassword;
    }

    public String getSecurityQuestion() {
        return securityQuestion;
    }

    public void setSecurityQuestion(String SecurityQuestion) {
        this.securityQuestion = SecurityQuestion;
    }

    public String getSecurityAnswer() {
        return securityAnswer;
    }

    public void setSecurityAnswer(String SecurityAnswer) {
        this.securityAnswer = SecurityAnswer;
    }

    public Integer getAccountType() {
        return accountType;
    }

    public void setAccountType(Integer AccountType) {
        this.accountType = AccountType;
    }

}