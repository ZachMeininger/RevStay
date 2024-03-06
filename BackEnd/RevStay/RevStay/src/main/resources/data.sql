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
    Booking_Guests int NOT NULL,
    Room_Id int NOT NULL,
    FOREIGN KEY(Room_Id) references Hotel_Room(Room_Id)
);

CREATE TABLE Customer_Review(
    Review_Id int NOT NULL PRIMARY KEY auto_increment,
    Review_Star int NOT NULL,
    Review_Body varchar(200) NOT NULL,
    Hotel_Id int NOT NULL,
    Customer_Id int NOT NULL,
    FOREIGN KEY(Hotel_Id) references Hotel_Account(Hotel_Id),
    FOREIGN KEY(Customer_Id) references Customer_Account(Customer_Id)
);

CREATE TABLE Customer_Favorite(
    Favorite_Id int NOT NULL PRIMARY KEY auto_increment,
    Hotel_Id int NOT NULL,
    Customer_Id int NOT NULL,
    FOREIGN KEY(Hotel_Id) references Hotel_Account(Hotel_Id),
    FOREIGN KEY(Customer_Id) references Customer_Account(Customer_Id)
);



INSERT INTO User_Account(User_Email, User_Password, Security_Question, Security_Answer, Account_Type) VALUES ('email','password','sq','sa',1);
INSERT INTO Customer_Account(Customer_First, Customer_Last, User_Id) VALUES ('Bob','Barker',1);
INSERT INTO Hotel_Account(Hotel_Name, Hotel_Address, Hotel_Description, Hotel_Image, Hotel_Pool, Hotel_Sauna, Hotel_Rest, User_Id) VALUES ('name1','address1','description1','image1',0,0,0,1);
INSERT INTO Hotel_Account(Hotel_Name, Hotel_Address, Hotel_Description, Hotel_Image, Hotel_Pool, Hotel_Sauna, Hotel_Rest, User_Id) VALUES ('name2','address2','description2','image2',0,0,0,1);
INSERT INTO Hotel_Account(Hotel_Name, Hotel_Address, Hotel_Description, Hotel_Image, Hotel_Pool, Hotel_Sauna, Hotel_Rest, User_Id) VALUES ('name3','address3','description3','image3',0,0,0,1);
INSERT INTO Hotel_Account(Hotel_Name, Hotel_Address, Hotel_Description, Hotel_Image, Hotel_Pool, Hotel_Sauna, Hotel_Rest, User_Id) VALUES ('name4','address4','description4','image4',0,0,0,1);

--INSERT INTO Customer_Review VALUES (1,4,'first review',2,1);
--INSERT INTO Customer_Review VALUES (2,2,'first review',2,1);
--INSERT INTO Customer_Review VALUES (3,3,'first review',2,1);

INSERT INTO Hotel_Room VALUES (1,1,'The couch',1,125.00, 'image',0,1,0,1);
INSERT INTO Customer_Booking VALUES (1,'2024-03-24','2024-03-27',0,0,2,1);


