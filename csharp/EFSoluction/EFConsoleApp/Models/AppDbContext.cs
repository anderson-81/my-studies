using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;

namespace EFConsoleApp.Models
{
    class AppDbContext : DbContext
    {
        public DbSet<cPerson> Person { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Database=dbCrud;Username=postgres;Password=121181");

            //exibe as consultas SQL no console
            /*
            optionsBuilder
             .EnableSensitiveDataLogging(true)
             .UseLoggerFactory(new LoggerFactory().AddConsole((category, level) =>
                level == LogLevel.Information &&
                category == DbLoggerCategory.Database.Command.Name, true));
            */
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<cPerson>().HasData(new cPerson
            {
                Id = 67,
                Name = "Laura",
                Email = "laura@sahdgashgds.com",
                Salary = 4321,
                Birthday = new DateTime(1974, 08, 12),
                Gender = 'F'
            });
        }
    }
}
