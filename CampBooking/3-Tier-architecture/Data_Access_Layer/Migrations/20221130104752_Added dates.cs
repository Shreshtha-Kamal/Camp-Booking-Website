using Microsoft.EntityFrameworkCore.Migrations;

namespace Data_Access_Layer.Migrations
{
    public partial class Addeddates : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "checkInDate",
                table: "BookCamps",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "checkOutDate",
                table: "BookCamps",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "checkInDate",
                table: "BookCamps");

            migrationBuilder.DropColumn(
                name: "checkOutDate",
                table: "BookCamps");
        }
    }
}
