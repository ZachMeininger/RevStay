package dev.team2.RevStay.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CustomerAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer customerId;

    private String customerFirst;

    private String customerLast;

    private Integer userId;

    public CustomerAccount() {

    }

    public CustomerAccount(String CustomerFirst, String CustomerLast, Integer UserId) {
        this.customerFirst = CustomerFirst;
        this.customerLast = CustomerLast;
        this.userId = UserId;
    }

    public CustomerAccount(Integer CustomerId, String CustomerFirst, String CustomerLast, Integer UserId) {
        this.customerId = CustomerId;
        this.customerFirst = CustomerFirst;
        this.customerLast = CustomerLast;
        this.userId = UserId;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer CustomerId) {
        this.customerId = CustomerId;
    }

    public String getCustomerFirst() {
        return customerFirst;
    }

    public void setCustomerFirst(String CustomerFirst) {
        this.customerFirst = CustomerFirst;
    }

    public String getCustomerLast() {
        return customerLast;
    }

    public void setCustomerLast(String CustomerLast) {
        this.customerLast = CustomerLast;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer UserId)
    {
        this.userId = UserId;
    }
}