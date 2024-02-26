DROP TABLE IF EXISTS  User_Account;

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
    User_Id int NOT NULL,
    FOREIGN KEY(User_Id) references User_Account(User_Id)
);

CREATE TABLE Hotel_Account(
    Hotel_Id int NOT NULL PRIMARY KEY auto_increment,
    Hotel_Address varchar(100) NOT NULL,
    Hotel_Description varchar(200) NOT NULL,
    Hotel_Picture varchar(200) NOT NULL,
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
    Hotel_Id int NOT NULL,
    FOREIGN KEY(Hotel_Id) references Hotel_Account(Hotel_Id)
);

CREATE TABLE Customer_Booking(
    Booking_Id int NOT NULL PRIMARY KEY auto_increment,
    Booking_Start date NOT NULL,
    Booking_End date NOT NULL,
    Room_Id int NOT NULL,
    FOREIGN KEY(Room_Id) references Hotel_Room(Room_Id)
);


