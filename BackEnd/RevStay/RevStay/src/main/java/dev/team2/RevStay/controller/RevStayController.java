package dev.team2.RevStay.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import dev.team2.RevStay.entity.*;
import dev.team2.RevStay.repository.HotelAccountRepository;
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
    CustomerFavoriteService favoriteService;
    @Autowired
    CustomerAccountService customeraccountService;
    @Autowired
    HotelAccountService hotelaccountService;
    @Autowired
    HotelRoomService hotelRoomService;
    @Autowired
    CustomerReviewService customerReviewService;
    @Autowired
    CustomerBookingService customerBookingService;

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

    @PostMapping("/addHotel")
    public ResponseEntity<String> addHotel(@RequestBody HotelAccount hotel) {
        HotelAccount savedHotel = hotelaccountService.saveHotel(hotel);
        if (savedHotel != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Hotel added successfully");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add hotel");
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

    @PostMapping(value = "notifyBooking")
    public ResponseEntity<CustomerBooking> notificationBooking(@RequestBody CustomerBooking customerBooking) throws JsonProcessingException
    {
        CustomerBooking bookingCheck = customerBookingService.addCustomerBooking(customerBooking);
        if(bookingCheck != null)
        {
            return ResponseEntity.ok(bookingCheck);
        }
        else
        {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(bookingCheck);
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

    @PatchMapping(value = "/passChange")
    public ResponseEntity<UserAccount> checkAccount(@RequestBody UserAccount userAccount) throws JsonProcessingException
    {
        UserAccount accountCheck = useraccountService.findUserAccountByEmailAndSecurity(userAccount);
        if(accountCheck != null)
        {
            accountCheck.setUserPassword(userAccount.getUserPassword());
            UserAccount accountCheck2 = useraccountService.changeUserAccountPassword(accountCheck);
            return ResponseEntity.ok(accountCheck2);
        }
        return ResponseEntity.status(HttpStatus.CONFLICT).body(accountCheck);
    }

    @PostMapping(value = "/newFavorite")
    public ResponseEntity<CustomerFavorite> newFavoriteHandler(@RequestBody CustomerFavorite favorite) throws JsonProcessingException
    {
        favorite.setCustomerId(customeraccountService.getAccountNumByUserId(favorite.getCustomerId()));
        /*
        System.out.println(favorite.getFavoriteId());

        System.out.println(favorite.getCustomerId());
        System.out.println(favorite.getCustomerId().getClass().getName());

        System.out.println(favorite.getHotelId());
        System.out.println(favorite.getHotelId().getClass().getName());
        */
        CustomerFavorite favoriteCheck = favoriteService.addFavorite(favorite);

        if(favoriteCheck != null)
        {
            return ResponseEntity.ok(favoriteCheck);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(favoriteCheck);
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
        review.setCustomerId(customeraccountService.getAccountNumByUserId(review.getCustomerId()));
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
    @PostMapping("/createBooking")
    public ResponseEntity<CustomerBooking> createBooking(@RequestBody CustomerBooking booking) {
        System.out.println(booking.getBookingStart());
        CustomerBooking createdBooking = customerBookingService.addCustomerBooking(booking);
        if(createdBooking != null) {
            return ResponseEntity.ok(createdBooking);
        } else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }
    @GetMapping("/getBookingsByCustomerId/{customerId}")
    public ResponseEntity<List<CustomerBooking>> getBookingsByCustomerAccountId(@PathVariable int customerId){
        List<CustomerBooking> bookings =  customerBookingService.getCustomerBookingsByCustomerAccountId(customerId);
        return ResponseEntity.ok(bookings);

    }
    @GetMapping(value = "/RoomsByHotelId/{hotelId}")
    public ResponseEntity<List<HotelRoom>> getRoomsByHotelId(@PathVariable int hotelId) {

        List<HotelRoom> rooms = hotelRoomService.getHotelRoomByHotelId(hotelId);

        if(rooms != null) {
            return ResponseEntity.status(HttpStatus.OK).body(rooms);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
    }
}