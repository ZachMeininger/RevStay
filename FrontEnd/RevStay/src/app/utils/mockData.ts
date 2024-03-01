import { Hotel } from '../models/hotel';

export const mockHotel: Hotel = {
  //Mock data
    Hotel_Id : 1,
    hotelName:"TestHotel",
    Hotel_Address:"TestAddress",
    Hotel_Description:"TestDescription",
    Hotel_Image:"TestImage",
    Hotel_Pool: 1,
    Hotel_Sauna: 1,
    Hotel_Rest: 1,
    User_Id: 1
  }


  export const mockManyHotel: Hotel[] = [
    {
    //Mock data1
      Hotel_Id : 1,
      hotelName:"TestHotel",
      Hotel_Address:"TestAddress",
      Hotel_Description:"TestDescription",
      Hotel_Image:"TestImage",
      Hotel_Pool: 1,
      Hotel_Sauna: 1,
      Hotel_Rest: 1,
      User_Id: 1
    },
    {
        //Mock data2
          Hotel_Id : 2,
          hotelName:"TestHotel2",
          Hotel_Address:"TestAddress2",
          Hotel_Description:"TestDescription2",
          Hotel_Image:"TestImage2",
          Hotel_Pool: 2,
          Hotel_Sauna: 2,
          Hotel_Rest: 2,
          User_Id: 2
        },
    {
    //Mock data3
      Hotel_Id : 3,
      hotelName:"TestHotel3",
      Hotel_Address:"TestAddress3",
      Hotel_Description:"TestDescription3",
      Hotel_Image:"TestImage3",
      Hotel_Pool: 3,
      Hotel_Sauna: 3,
      Hotel_Rest: 3,
      User_Id: 3
    },
    {
        //Mock data4
          Hotel_Id : 4,
          hotelName:"TestHotel4",
          Hotel_Address:"TestAddress4",
          Hotel_Description:"TestDescription4",
          Hotel_Image:"TestImage4",
          Hotel_Pool: 4,
          Hotel_Sauna: 4,
          Hotel_Rest: 4,
          User_Id: 4
    }
  ]