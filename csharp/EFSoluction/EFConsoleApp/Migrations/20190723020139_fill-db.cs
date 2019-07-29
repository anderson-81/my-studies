using Microsoft.EntityFrameworkCore.Migrations;

namespace EFConsoleApp.Migrations
{
    public partial class filldb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO \"Person\" (\"Name\", \"Email\", \"Salary\", \"Birthday\", \"Gender\") VALUES ('Anderson','anderson@wgehgwew.com',5432.10,'1981-01-14','M')");
            migrationBuilder.Sql("INSERT INTO \"Person\" (\"Name\", \"Email\", \"Salary\", \"Birthday\", \"Gender\") VALUES ('Lucy','lucy@wgehgwew.com',1111.10,'1976-02-27','F')");
            migrationBuilder.Sql("INSERT INTO \"Person\" (\"Name\", \"Email\", \"Salary\", \"Birthday\", \"Gender\") VALUES ('Anne','anne@wgehgwew.com',2222.10,'1977-08-30','F')");
            migrationBuilder.Sql("INSERT INTO \"Person\" (\"Name\", \"Email\", \"Salary\", \"Birthday\", \"Gender\") VALUES ('Paul','paul@wgehgwew.com',3333.10,'1990-04-15','M')");
            migrationBuilder.Sql("INSERT INTO \"Person\" (\"Name\", \"Email\", \"Salary\", \"Birthday\", \"Gender\") VALUES ('John','john@wgehgwew.com',4444.10,'1970-09-11','M')");
            migrationBuilder.Sql("INSERT INTO \"Person\" (\"Name\", \"Email\", \"Salary\", \"Birthday\", \"Gender\") VALUES ('Ava','ava@wgehgwew.com',5000.10,'1985-10-08','F')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM PERSON;");
        }
    }
}
