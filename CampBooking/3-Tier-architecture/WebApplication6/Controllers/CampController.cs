using Business_Logic_Layer.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using WebApplication6.Repository;
using WebApplication6.Repository.Entities;


namespace WebApplication6.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("AllowOrigin")]
    public class CampController : ControllerBase
    {

        private Business_Logic_Layer.CampBLL _BLL;
        private Business_Logic_Layer.BookCampBLL _BLL1;
        public CampController()
        {
            _BLL = new Business_Logic_Layer.CampBLL();
            _BLL1 = new Business_Logic_Layer.BookCampBLL();
        }

        [HttpPost("Create")]
        public void postCamp([FromBody] CampModel personModel)
        {
            _BLL.postCamp(personModel);
        }


        [HttpGet("GetAllCamps")]


        public List<CampModel> GetAllCamps()
        {
            return _BLL.GetAllCamps();
        }

        [HttpPost("GetFilteredCamps")]

        public List<Camp> GetFilteredCamps(FilterDatesModel filterDates)
        {
            return _BLL.GetFilteredCamps(filterDates);
        }



        [HttpGet]
        [Route("getCamp/{id}")]
        public ActionResult<CampModel> GetCampById([FromRoute]int id)
        {
            var camp = _BLL.GetCampById(id);

            if (camp == null)
            {
                return NotFound("Invalid ID");
            }

            return Ok(camp);
        }
        

    
     
    [HttpPost("deletecamp")]
        public void deleteCamp(CampModel camp)
        {
            var db = new CampDbContext();
            Camp p = new Camp();
            p = db.Camps.FirstOrDefault(x => x.Id == camp.Id);

            if (p == null)
                throw new Exception("Not found");

            db.Camps.Remove(p);
            db.SaveChanges();
        }

        [HttpPut("updates/{id}")]
        /* [HttpPut]*/
        public void upCamp(int id, [FromBody] CampModel camp)
        {
            _BLL.upCamp(id, camp);
        }

    }
}
