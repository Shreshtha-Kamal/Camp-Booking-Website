using AutoMapper;
using Business_Logic_Layer.Models;
using Data_Access_Layer.Repository.Entities;
using System;
using System.Collections.Generic;
using WebApplication6.Repository.Entities;


namespace Business_Logic_Layer
{
    public class CampBLL
    {

        private Data_Access_Layer.CampDAL _DAL;
        private readonly Data_Access_Layer.BookCampDAL _BDAL;
        private Mapper _CampMapper;

        public CampBLL()
        {
            _DAL = new Data_Access_Layer.CampDAL();
            _BDAL = new Data_Access_Layer.BookCampDAL();
            var _configCamp = new MapperConfiguration(cfg => cfg.CreateMap<Camp, CampModel>().ReverseMap());

            _CampMapper = new Mapper(_configCamp);
        }

        public List<CampModel> GetAllCamps()
        {
            List<Camp> campsFromDB = _DAL.GetAllCamp();
            List<CampModel> campsModel = _CampMapper.Map<List<Camp>, List<CampModel>>(campsFromDB);

            return campsModel;
        }

        public List<Camp>GetFilteredCamps(FilterDatesModel filterDates)
        {
            List<Camp> campsFromDB = _DAL.GetAllCamp();
            List<BookCamp> bookCampsFromDB = _BDAL.GetAllBooking();
            List<Camp> filteredCamp=new List<Camp>();
            foreach (Camp item in campsFromDB)
            {
                var custCheckinDate = filterDates.CheckInDate;
                var custCheckoutDate = filterDates.CheckOutDate;
                var isCampOk = true;
                foreach (BookCamp bookitem in bookCampsFromDB)
                {
                    if(item.Id.ToString()==bookitem.BookedCampId)
                    {
                        if(DateTime.Parse(filterDates.CheckInDate)>DateTime.Parse(bookitem.checkOutDate))
                        {
                            continue;
                        }
                        else if(DateTime.Parse(filterDates.CheckOutDate)<DateTime.Parse(bookitem.checkInDate))
                        {
                            continue;
                        }
                        else
                        {
                            isCampOk = false;
                            break;
                        }
                    }
                }
                if (isCampOk==true)
                {
                    filteredCamp.Add(item);
                }
            }
            return filteredCamp;
        }

        public CampModel GetCampById(int id)
        {
            var campEntity = _DAL.GetCampById(id);

            CampModel campModel = _CampMapper.Map<Camp, CampModel>(campEntity);

            return campModel;
        }


        public void postCamp(CampModel campModel)
        {
            Camp campEntity = _CampMapper.Map<CampModel, Camp>(campModel);
            _DAL.postCamp(campEntity);
        }
        public void upCamp(int id, CampModel camp)
        {
            Camp campEntity = _CampMapper.Map<CampModel, Camp>(camp);
            _DAL.upCamp(id, campEntity);
        }

    }
}
