using Business_Logic_Layer.Models;
using Data_Access_Layer.Repository.Entities;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Drawing;
using System.Linq;
using System;
using System.Threading.Tasks;
using WebApplication6.Repository;

namespace Web_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class BookCampController : ControllerBase
    {
       
        private Business_Logic_Layer.BookCampBLL _BLL1;
        //private object DC;

        public BookCampController()
        {
            
            _BLL1 = new Business_Logic_Layer.BookCampBLL();
        }
        [HttpPost("CreateBooking")]
        public bool postCamp( BookCampModel BookcampModel)
        {
            return _BLL1.BookingPost(BookcampModel);   
        }

        [HttpGet("booking/camp/{referenceId}")]
        public async Task<BookCamp> GetBookingAsync([FromRoute] string referenceId)
        {
            var db = new CampDbContext();
            if (referenceId == "")
            {
                return null;
            }
            else
            {
                var result = await db.BookCamps.Where(b => b.referenceId == referenceId).FirstOrDefaultAsync();
                return result;
            }

        }

        [HttpDelete("DeleteBooking/{referenceId}")]
        public void delCamp([FromRoute] string referenceId)
        {
            var db = new CampDbContext();
            BookCamp bc = new BookCamp();
            bc = db.BookCamps.FirstOrDefault(x => x.referenceId == referenceId);
            if (bc==null)
            {
                throw new Exception("Not Found");
            }
            db.BookCamps.Remove(bc);
            db.SaveChanges();
        }
    }
}

/*
 1. table bnao aur sara data waha se aaye...
2. 
 */
