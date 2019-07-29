using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace FluentAPIApp.Models
{
    public class AppDbContext : DbContext
    {
        public DbSet<Person> Person { get; set; }
        public DbSet<Car> Car { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Database=dbFluent;Username=postgres;Password=121181");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // DefiningTableProperties(modelBuilder);

            modelBuilder.Entity<Person>()
              .HasMany(p => p.Cars)
              .WithOne(c => c.Person)
              .IsRequired(); // Obrigatoriedade do relacionamento (posso mudar também na migração);
        }

        // Adicionais:

        private void DefiningTableProperties(ModelBuilder modelBuilder)
        {
            // Nome da tabela:
            modelBuilder.Entity<Person>()
                .ToTable("Pessoa");

            // Chave primária:
            modelBuilder.Entity<Person>()
                .HasKey(p => p.Id);

            // Indice da tabela:
            modelBuilder.Entity<Person>()
                .HasIndex(p => p.Name);

            // Propriedade Nome:
            modelBuilder.Entity<Person>()
                .Property(p => p.Name)
                .HasMaxLength(45)
                .IsRequired();

            // Propriedade Birthday:
            modelBuilder.Entity<Person>()
                 .Property(p => p.Birthday)
                 .HasColumnType("Date")
                 .IsRequired();

            // Propriedade Salary:
            modelBuilder.Entity<Person>()
                 .Property(p => p.Salary)
                 .HasDefaultValue(0)
                 .IsRequired();

            // Incluindo dados na migração:
            modelBuilder.Entity<Person>()
                .HasData(new Person
                {
                    Id = 1,
                    Name = "Anderson",
                    Birthday = new DateTime(1981, 01, 01),
                    Gender = 'M'
                });
        }
    }
}
