using Microsoft.EntityFrameworkCore.Migrations;

namespace Data_Access_Layer.Migrations
{
    public partial class Initials : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BookCamps",
                columns: table => new
                {
                    cellphone = table.Column<string>(nullable: false),
                    billaddress = table.Column<string>(nullable: true),
                    state = table.Column<string>(nullable: true),
                    country = table.Column<string>(nullable: true),
                    ZipCode = table.Column<string>(nullable: true),
                    referenceId = table.Column<string>(nullable: true),
                    totalStay = table.Column<string>(nullable: true),
                    totalAmount = table.Column<string>(nullable: true),
                    confirmationAmount = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookCamps", x => x.cellphone);
                });

            migrationBuilder.CreateTable(
                name: "Camps",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    campName = table.Column<string>(nullable: true),
                    rate = table.Column<double>(nullable: false),
                    capacity = table.Column<int>(nullable: false),
                    description = table.Column<string>(nullable: true),
                    image = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Camps", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BookCamps");

            migrationBuilder.DropTable(
                name: "Camps");
        }
    }
}
