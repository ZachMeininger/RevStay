DROP TABLE IF EXISTS  User_Account;
DROP TABLE IF EXISTS  Customer_Account;
DROP TABLE IF EXISTS  Hotel_Account;
DROP TABLE IF EXISTS  Hotel_Room;
DROP TABLE IF EXISTS  Customer_Booking;
DROP TABLE IF EXISTS  Customer_Review;
DROP TABLE IF EXISTS  Customer_Favorite;
DROP TABLE IF EXISTS  Customer_Invoice;
DROP TABLE IF EXISTS  user_account;
DROP TABLE IF EXISTS  customer_account;
DROP TABLE IF EXISTS  hotel_account;
DROP TABLE IF EXISTS  hotel_Room;
DROP TABLE IF EXISTS  customer_booking;
DROP TABLE IF EXISTS  customer_review;
DROP TABLE IF EXISTS  customer_favorite;
DROP TABLE IF EXISTS  customer_invoice;

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
    Price_High decimal(10,2) NOT NULL,
    Price_Low decimal(10,2) NOT NULL,
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
    Customer_Id int NOT NULL,
    FOREIGN KEY(Room_Id) references Hotel_Room(Room_Id),
    FOREIGN KEY(Customer_Id) references Customer_Account(Customer_Id)
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

CREATE TABLE Customer_Invoice(
    Invoice_Id int NOT NULL PRIMARY KEY auto_increment,
    Invoice_Date date NOT NULL,
    Invoice_Card char(4) NOT NULL,
    Booking_Id int NOT NULL,
    Customer_Id int NOT NULL,
    FOREIGN KEY(Booking_Id) references Customer_Booking(Booking_Id),
    FOREIGN KEY(Customer_Id) references Customer_Account(Customer_Id)
);




--INSERT INTO User_Account VALUES (1,'email','password','sq','sa',1);
--INSERT INTO Customer_Account VALUES (1,'email','password',1);
--INSERT INTO Hotel_Account VALUES (1,'name1','CA','description1','image1',1000,0,0,0,0,1);
--INSERT INTO Hotel_Account VALUES (2,'name2','WA','description2','image2',2000,1000,0,0,0,1);
--INSERT INTO Hotel_Account VALUES (3,'name3','CA','description3','image3',3000,2000,0,0,0,1);
--INSERT INTO Hotel_Account VALUES (4,'name4','NB','description4','image4',4000,3000,0,0,0,1);

INSERT INTO User_Account(User_Email, User_Password, Security_Question, Security_Answer, Account_Type) VALUES ('email','password','sq','sa',0);
INSERT INTO Customer_Account(Customer_First, Customer_Last, User_Id) VALUES ('Bob','Barker',1);
INSERT INTO User_Account(User_Email, User_Password, Security_Question, Security_Answer, Account_Type) VALUES ('email1','password1','sq','sa',1);
INSERT INTO Hotel_Account(Hotel_Name, Hotel_Address, Hotel_Description, Hotel_Image,Price_High,Price_Low, Hotel_Pool, Hotel_Sauna, Hotel_Rest, User_Id) VALUES ('Hotel California','Los Angeles','A hotel located in the heart of California. Thats all there is too it','assets/images/hotel-california.jpg',1000,0,0,0,0,2);
INSERT INTO Hotel_Account(Hotel_Name, Hotel_Address, Hotel_Description, Hotel_Image,Price_High,Price_Low, Hotel_Pool, Hotel_Sauna, Hotel_Rest, User_Id) VALUES ('Four Points Hotel and Diner','Pleasanton','A hotel with in door dining and actual beds!','assets/images/four-corners.webp',2000,1000,0,1,1,2);
INSERT INTO Hotel_Account(Hotel_Name, Hotel_Address, Hotel_Description, Hotel_Image,Price_High,Price_Low, Hotel_Pool, Hotel_Sauna, Hotel_Rest, User_Id) VALUES ('Corner of the World','Charleston','Some corner place. Like its literally in a corner','assets/images/PHK_Exterior.jpg',3000,2000,0,1,0,2);
INSERT INTO Hotel_Account(Hotel_Name, Hotel_Address, Hotel_Description, Hotel_Image,Price_High,Price_Low, Hotel_Pool, Hotel_Sauna, Hotel_Rest, User_Id) VALUES ('Abyss','Abyss','Some reallly dark place. Lighting needs to be paid for','assets/images/Abyss.jpg',4000,3000,1,0,0,2);

INSERT INTO Customer_Review (Review_Star, Review_Body, Hotel_Id, Customer_Id) VALUES (4,'first review',2,1);
INSERT INTO Customer_Review (Review_Star, Review_Body, Hotel_Id, Customer_Id) VALUES (2,'second review',2,1);
INSERT INTO Customer_Review (Review_Star, Review_Body, Hotel_Id, Customer_Id) VALUES (3,'third review',2,1);

INSERT INTO Hotel_Room VALUES (1,1,'Deluxe Queen',1,125.00, 'image',0,1,0,1);
INSERT INTO Hotel_Room VALUES (2,2,'Studio King',1,125.00, 'image',0,1,0,1);
INSERT INTO Customer_Booking VALUES (0,'2024-03-24','2024-03-27',0,0,2,1,1);

INSERT INTO Customer_Favorite (Hotel_Id,Customer_Id) VALUES (1,1);


