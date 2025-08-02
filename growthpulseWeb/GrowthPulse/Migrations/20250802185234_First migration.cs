using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GrowthPulse.Migrations
{
    public partial class Firstmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GoalDetails",
                columns: table => new
                {
                    GoalDetailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GoalOwnerEmail = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    GoalName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    GoalSetDate = table.Column<string>(type: "nvarchar(5)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GoalDetails", x => x.GoalDetailId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GoalDetails");
        }
    }
}
