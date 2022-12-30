using System;
using System.Collections.Generic;
using System.Text;
using WebApplication6.Repository.Entities;
using WebApplication6.Repository;
using Data_Access_Layer.Repository.Entities;
using System.Linq;

namespace Data_Access_Layer
{
    public class BookCampDAL
    {

        public void postCamp(BookCamp camp)
        {
            var db = new CampDbContext();
            db.Add(camp);
            db.SaveChanges();
        }

        public List<BookCamp> GetAllBooking()
        {
            var db = new CampDbContext();
            return db.BookCamps.ToList();
        }
    }
}
