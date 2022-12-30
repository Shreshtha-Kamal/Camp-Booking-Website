using System.ComponentModel.DataAnnotations;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebApplication6.Repository.Entities

{
    public partial class Camp
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
