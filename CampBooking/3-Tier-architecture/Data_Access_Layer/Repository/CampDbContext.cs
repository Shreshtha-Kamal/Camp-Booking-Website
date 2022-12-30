using Data_Access_Layer.Repository.Entities;
using Microsoft.EntityFrameworkCore;
using WebApplication6.Repository.Entities;


// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace WebApplication6.Repository
{
    public partial class CampDbContext : DbContext
    {
        public CampDbContext()
        {
        }

        public CampDbContext(DbContextOptions<CampDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Camp> Camps { get; set; }
        public virtual DbSet<BookCamp> BookCamps { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

                optionsBuilder.UseSqlServer("Data Source=IN-51BTTN3;Initial Catalog=CampbookingDatabase;Integrated Security=True");
            }
        }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Person>(entity =>
        //    {
        //        entity.Property(e => e.Address).IsUnicode(false);

        //        entity.Property(e => e.FirstName).IsUnicode(false);

        //        entity.Property(e => e.LastName).IsUnicode(false);

        //        entity.Property(e => e.PhoneNumber).IsUnicode(false);
        //    });

        //    OnModelCreatingPartial(modelBuilder);
        //}

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
