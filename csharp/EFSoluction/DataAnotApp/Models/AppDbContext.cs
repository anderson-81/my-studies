using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAnotApp.Models
{
    public class AppDbContext : DbContext
    {
        public DbSet<Pessoa> Person { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Database=dbDataAnot;Username=postgres;Password=121181");

            //Exibe as consultas SQL no console
            optionsBuilder
                 .EnableSensitiveDataLogging(true)
                 .UseLoggerFactory(new LoggerFactory().AddConsole((category, level) =>
                    level == LogLevel.Information &&
                    category == DbLoggerCategory.Database.Command.Name, true));
        }
    }
}
