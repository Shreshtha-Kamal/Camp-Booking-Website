using Data_Access_Layer.Repository.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using WebApplication6.Repository;
using WebApplication6.Repository.Entities;

namespace Data_Access_Layer
{
    public class CampDAL
    {
        public List<Camp> GetAllCamp()
        {
            var db = new CampDbContext();
            return db.Camps.ToList();
        }

        public Camp GetCampById(int id)
        {
            var db = new CampDbContext();
            Camp p = new Camp();

            p = db.Camps.FirstOrDefault(x => x.Id == id);

            return p;
        }


        public void postCamp(Camp camp)
        {
            var db = new CampDbContext();
            db.Add(camp);
            db.SaveChanges();
        }
        public void upCamp(int id, Camp camp)
        {
            var db = new CampDbContext();
            var row = db.Camps.Where(x => x.Id == id).FirstOrDefault();
            if (row != null)
            {
                row.campName = camp.campName;
                row.rate = camp.rate;
                row.capacity = camp.capacity;
                row.description = camp.description;
                row.image= camp.image;
                db.SaveChanges();
            }
        }

        /*public List<BookCamp> GetAllBooking()
        {

            throw new NotImplementedException();
        }*/
    }
}
