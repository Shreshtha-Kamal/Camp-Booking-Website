using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Business_Logic_Layer.Models
{
     public class BookCampModel
    {
        public string billaddress { get; set; }
        public string state { get; set; }

        public string country { get; set; }
        public string ZipCode { get; set; }
        [Key]
        public string cellphone { get; set; }
        public string referenceId { get; set; }
        public string totalStay { get; set; }
        public string totalAmount { get; set; }
        public string confirmationAmount { get; set; }
        public string checkInDate { get; set; }
        public string checkOutDate { get; set; }
        public string BookedCampId { get; set; }
    }
}
