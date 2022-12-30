﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApplication6.Repository;

namespace Data_Access_Layer.Migrations
{
    [DbContext(typeof(CampDbContext))]
    [Migration("20221206070537_Add_Booked_Camp_Id")]
    partial class Add_Booked_Camp_Id
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.31")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Data_Access_Layer.Repository.Entities.BookCamp", b =>
                {
                    b.Property<string>("cellphone")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("BookedCampId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ZipCode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("billaddress")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("checkInDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("checkOutDate")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("confirmationAmount")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("country")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("referenceId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("state")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("totalAmount")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("totalStay")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("cellphone");

                    b.ToTable("BookCamps");
                });

            modelBuilder.Entity("WebApplication6.Repository.Entities.Camp", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("campName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("capacity")
                        .HasColumnType("int");

                    b.Property<string>("description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("rate")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("Camps");
                });
#pragma warning restore 612, 618
        }
    }
}
