import { Hotel } from '../models/hotel';

/*
 hotelId:number,
    hotelName:string,
    hotelAddress:string,
    hotelDescription:string,
    hotelImage:string,
    hotelPool:number,
    hotelSauna:number,
    hotelRest:number,
    userId:number
*/

export const mockHotel: Hotel = {
  //Mock data
  hotelId : 1,
  hotelName:"TestHotel",
  hotelAddress:"TestAddress",
  hotelDescription:"TestDescription",
  hotelImage:"TestImage",
  hotelPool: 1,
  hotelSauna: 1,
  hotelRest: 1,
  userId: 1
  }


  export const mockManyHotel: Hotel[] = [
    {
    //Mock data1
    hotelId : 1,
    hotelName:"TestHotel1",
    hotelAddress:"TestAddress1",
    hotelDescription:"TestDescription1",
    hotelImage:"TestImage1",
    hotelPool: 1,
    hotelSauna: 1,
    hotelRest: 1,
    userId: 1
    },
    {
        //Mock data2
        hotelId : 2,
        hotelName:"TestHotel2",
        hotelAddress:"TestAddress2",
        hotelDescription:"TestDescription2",
        hotelImage:"TestImage2",
        hotelPool: 1,
        hotelSauna: 1,
        hotelRest: 1,
        userId: 1
        },
    {
    //Mock data3
    hotelId : 3,
    hotelName:"TestHotel3",
    hotelAddress:"TestAddress3",
    hotelDescription:"TestDescription3",
    hotelImage:"TestImage3",
    hotelPool: 1,
    hotelSauna: 1,
    hotelRest: 1,
    userId: 1
    },
    {
        //Mock data4
        hotelId : 4,
        hotelName:"TestHotel4",
        hotelAddress:"TestAddress4",
        hotelDescription:"TestDescription4",
        hotelImage:"TestImage4",
        hotelPool: 1,
        hotelSauna: 1,
        hotelRest: 1,
        userId: 1
    }
  ]