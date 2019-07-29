using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EFConsoleApp.Migrations
{
    public partial class seedpersonhasdata : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Person",
                columns: new[] { "Id", "Birthday", "Email", "Gender", "Name", "Salary" },
                values: new object[] { 67, new DateTime(1974, 8, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), "laura@sahdgashgds.com", 'F', "Laura", 4321m });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Person",
                keyColumn: "Id",
                keyValue: 67);
        }
    }
}
