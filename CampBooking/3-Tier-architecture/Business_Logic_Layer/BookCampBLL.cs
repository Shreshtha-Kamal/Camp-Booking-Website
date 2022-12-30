using AutoMapper;
using Business_Logic_Layer.Models;
using Data_Access_Layer.Repository.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using WebApplication6.Repository.Entities;

namespace Business_Logic_Layer
{
    public  class BookCampBLL
    {
        private Data_Access_Layer.BookCampDAL _DAL;
        private Mapper _Bookingmapper;
        private Mapper _PersonMapper;

        public BookCampBLL()
        {
            _DAL = new Data_Access_Layer.BookCampDAL();
            var _configPerson = new MapperConfiguration(cfg => cfg.CreateMap<BookCamp, BookCampModel>().ReverseMap());
            _Bookingmapper = new Mapper(_configPerson);
            var _configbook = new MapperConfiguration(cfg => cfg.CreateMap<Camp, CampModel>().ReverseMap());
            _PersonMapper = new Mapper(_configbook);
        }



        public bool BookingPost(BookCampModel personModel)
        {
            List<BookCamp> bookCampsFromDB = _DAL.GetAllBooking();
            var isValidBooking = true;
            foreach (BookCamp bookedItem in bookCampsFromDB)
            {
                if (bookedItem.BookedCampId==personModel.BookedCampId)
                {
                    if (DateTime.Parse(personModel.checkInDate)>DateTime.Parse(bookedItem.checkOutDate))
                    {
                        continue;
                    }
                    else if (DateTime.Parse(personModel.checkOutDate)<DateTime.Parse(bookedItem.checkInDate))
                    {
                        continue;
                    }
                    else
                    {
                        isValidBooking = false;
                        break;
                    }
                }

            }

            if (isValidBooking==true)
            {
                BookCamp personEntity = _Bookingmapper.Map<BookCamp>(personModel);
                _DAL.postCamp(personEntity);
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
