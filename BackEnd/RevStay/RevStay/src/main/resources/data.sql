DROP TABLE IF EXISTS  User_Account;
DROP TABLE IF EXISTS  Customer_Account;
DROP TABLE IF EXISTS  Hotel_Account;
DROP TABLE IF EXISTS  Hotel_Room;
DROP TABLE IF EXISTS  Customer_Booking;
DROP TABLE IF EXISTS  Customer_Review;
DROP TABLE IF EXISTS  Customer_Favorite;

CREATE TABLE User_Account(
    User_Id int NOT NULL PRIMARY KEY auto_increment,
    User_Email varchar(100),
    User_Password varchar(100) NOT NULL,
    Security_Question varchar(200) NOT NULL,
    Security_Answer varchar(200) NOT NULL,
    Account_Type int NOT NULL
);

CREATE TABLE Customer_Account(
    Customer_Id int NOT NULL PRIMARY KEY auto_increment,
    Customer_First varchar(20) NOT NULL,
    Customer_Last varchar(20) NOT NULL,
    User_Id int NOT NULL,
    FOREIGN KEY(User_Id) references User_Account(User_Id)
);

CREATE TABLE Hotel_Account(
    Hotel_Id int NOT NULL PRIMARY KEY auto_increment,
    Hotel_Name varchar(100) NOT NULL,
    Hotel_Address varchar(100) NOT NULL,
    Hotel_Description varchar(200) NOT NULL,
    Hotel_Image varchar(200) NOT NULL,
    Hotel_Pool bit NOT NULL,
    Hotel_Sauna bit NOT NULL,
    Hotel_Rest bit NOT NULL,
    User_Id int NOT NULL,
    FOREIGN KEY(User_Id) references User_Account(User_Id)
);

CREATE TABLE Hotel_Room(
    Room_Id int NOT NULL PRIMARY KEY auto_increment,
    Room_Number int NOT NULL,
    Room_Name varchar(50),
    Room_Bed int NOT NULL,
    Room_Price decimal(10,2) NOT NULL,
    Room_Image varchar(200) NOT NULL,
    Room_Hot bit NOT NULL,
    Room_Bar bit NOT NULL,
    Room_Kitch bit NOT NULL,
    Hotel_Id int NOT NULL,
    FOREIGN KEY(Hotel_Id) references Hotel_Account(Hotel_Id)
);

CREATE TABLE Customer_Booking(
    Booking_Id int NOT NULL PRIMARY KEY auto_increment,
    Booking_Start date NOT NULL,
    Booking_End date NOT NULL,
    Booking_Paid bit NOT NULL,
    Booking_Accepted bit NOT NULL,
    Room_Id int NOT NULL,
    FOREIGN KEY(Room_Id) references Hotel_Room(Room_Id)
);

CREATE TABLE Customer_Review(
    Review_Id int NOT NULL PRIMARY KEY auto_increment,
    Review_Star int NOT NULL,
    Review_Body varchar(200) NOT NULL,
    Hotel_Id int NOT NULL,
    Customer_Id int NOT NULL,
    FOREIGN_KEY(Hotel_Id) references Hotel_Account(Hotel_Id),
    FOREIGN_KEY(Customer_Id) references Customer_Account(Customer_Id)
);

CREATE TABLE Customer_Favorite(
    Favorite_Id int NOT NULL PRIMARY KEY auto_increment,
    Hotel_Id int NOT NULL,
    Customer_Id int NOT NULL,
    FOREIGN_KEY(Hotel_Id) references Hotel_Account(Hotel_Id),
    FOREIGN_KEY(Customer_Id) references Customer_Account(Customer_Id)
);


