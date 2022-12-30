using System.ComponentModel.DataAnnotations;

namespace Business_Logic_Layer.Models
{
    public class CampModel
    {
        [Key]
        public int Id { get; set; }


        public string campName { get; set; }
        public double rate { get; set; }
        public int capacity { get; set; }

        public string description { get; set; }
        public string image { get; set; }
    }
}

