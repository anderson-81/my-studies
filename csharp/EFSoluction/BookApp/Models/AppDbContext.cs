using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;

namespace BookApp.Models
{
    class AppDbContext : DbContext
    {
        public DbSet<Author> Author { get; set; }
        public DbSet<Book> Book { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Without LazyLoading:
            //optionsBuilder.UseNpgsql("Host=localhost;Database=dbBook;Username=postgres;Password=121181");

            // With LazyLoading:
            optionsBuilder
                .UseLazyLoadingProxies()
                .UseNpgsql("Host=localhost;Database=dbBook;Username=postgres;Password=121181");
            /*
                Error: Navigation property 'Books' on entity type 'Author' is not virtual. UseLa
                zyLoadingProxies requires all entity types to be public, unsealed, have virtual
                navigation properties, and have a public or protected constructor.
            */

            //Exibe as consultas SQL no console
            optionsBuilder
                 .EnableSensitiveDataLogging(true)
                 .UseLoggerFactory(new LoggerFactory().AddConsole((category, level) =>
                    level == LogLevel.Information &&
                    category == DbLoggerCategory.Database.Command.Name, true));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
