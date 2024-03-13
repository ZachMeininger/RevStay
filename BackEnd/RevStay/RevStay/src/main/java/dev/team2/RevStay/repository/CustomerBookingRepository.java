package dev.team2.RevStay.repository;

import dev.team2.RevStay.entity.CustomerAccount;
import dev.team2.RevStay.entity.CustomerBooking;
import jakarta.persistence.EntityResult;
import jakarta.persistence.FieldResult;
import jakarta.persistence.SqlResultSetMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerBookingRepository extends JpaRepository<CustomerBooking, Long> {

    List<CustomerBooking> findCustomerBookingsByCustomerAccountId(long CustomerId);


    //@Query(value = "SELECT * FROM Customer_Booking WHERE Customer_Booking.Room_Id = ?1 ;",


    //@SqlResultSetMapping(
    //    name="EmployeeResult",
    //    entities={
    //        @EntityResult(
    //            entityClass = com.baeldung.sqlresultsetmapping.Employee.class,
    //                fields={
    //                    @FieldResult(name="id",column="employeeNumber"),
    //                    @FieldResult(name="name", column="name")})})

    //@Query(value = "SELECT * FROM Customer_Booking INNER JOIN Hotel_Room ON Hotel_Room.Room_Id = Customer_Booking.Room_Id WHERE Hotel_Room.Hotel_Id = ?1 ;",
    //nativeQuery = true)

    @Query(value = "SELECT * FROM Customer_Booking WHERE Room_Id IN (SELECT Room_Id FROM Hotel_Room WHERE Hotel_Id = ?1);",
    nativeQuery = true)
    List<CustomerBooking> findHotelReservationsByHotelAccountId(Integer HotelAccountId);

}
