package dev.team2.RevStay.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import dev.team2.RevStay.entity.CustomerAccount;
import dev.team2.RevStay.entity.CustomerReview;
import dev.team2.RevStay.entity.HotelAccount;
import dev.team2.RevStay.entity.HotelRoom;
import dev.team2.RevStay.entity.UserAccount;
import dev.team2.RevStay.service.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class RevStayController {

    @Autowired
    UserAccountService useraccountService;
    @Autowired
    CustomerAccountService customeraccountService;
    @Autowired
    HotelAccountService hotelaccountService;
    @Autowired
    HotelRoomService hotelroomService;
    @Autowired
    CustomerReviewService customerReviewService;

    @PostMapping(value = "/register")
    public ResponseEntity<UserAccount> registrationHandler(@RequestBody UserAccount useraccount) throws JsonProcessingException
    {
        if(useraccount.getUserEmail().length() == 0 || useraccount.getUserEmail().length() > 254 || useraccount.getUserPassword().length() < 4)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        else
        {
            UserAccount accountCheck = useraccountService.addUserAccount(useraccount);
            if(accountCheck != null)
            {
                return ResponseEntity.ok(accountCheck);
            }
            else
            {
                return ResponseEntity.status(HttpStatus.CONFLICT).body(accountCheck);
            }
        }
    }

    @PostMapping(value = "registerCustomer")
    public ResponseEntity<CustomerAccount> registrationCustHandler(@RequestBody CustomerAccount customeraccount) throws JsonProcessingException
    {
        CustomerAccount accountCheck = customeraccountService.addCustomerAccount(customeraccount);
        if(accountCheck != null)
        {
            return ResponseEntity.ok(accountCheck);
        }
        else
        {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(accountCheck);
        }
    }


    @PostMapping(value = "/login")
    public ResponseEntity<UserAccount> loginHandler(@RequestBody UserAccount useraccount) throws JsonProcessingException
    {
        UserAccount accountCheck = useraccountService.loginUserAccount(useraccount);
        if(accountCheck != null)
        {
            return ResponseEntity.ok(accountCheck);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(accountCheck);
    }

    @GetMapping(value = "/AllHotels")
    public ResponseEntity<List<HotelAccount>> getAllHotelsHandler() throws JsonProcessingException
    {
        List<HotelAccount> hotel = hotelaccountService.getAllHotels();

        //System.out.println(hotel);

        if(hotel != null)
        {
            return ResponseEntity.ok(hotel);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(hotel);
    }
    @PostMapping(value = "/newReview")
    public ResponseEntity<CustomerReview> createNewReviewHandler(@RequestBody CustomerReview review) throws JsonProcessingException
    {

        CustomerReview check = customerReviewService.addReview(review);

        //System.out.println(check);

        if(check != null)
        {
            return ResponseEntity.ok(check);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(check);
    }

    @PostMapping(value = "/allReview")
    public ResponseEntity<List<CustomerReview>> getAllReviewHandler(@RequestBody Integer hotel_id) throws JsonProcessingException {

        List<CustomerReview> check = customerReviewService.getAllReviews(hotel_id);

        //System.out.println(check);

        if (check != null) {
            return ResponseEntity.ok(check);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(check);
    }
    @GetMapping(value = "/RoomsByHotelId/{hotelId}")
    public ResponseEntity<List<HotelRoom>> getRoomsByHotelId(@PathVariable int hotelId) {

        List<HotelRoom> rooms = hotelroomService.getHotelRoomByHotelId(hotelId);

        if(rooms != null) {
            return ResponseEntity.status(HttpStatus.OK).body(rooms);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
    }
}