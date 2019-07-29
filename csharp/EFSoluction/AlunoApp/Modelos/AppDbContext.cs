using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;

namespace AlunoApp.Modelos
{
    class AppDbContext : DbContext
    {
        public DbSet<Aluno> Aluno { get; set; }
        public DbSet<Curso> Curso { get; set; }
        public DbSet<AlunoCurso> AlunoCurso { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Database=dbCurso;Username=postgres;Password=121181");

            //Exibe as consultas SQL no console
            optionsBuilder
                 .EnableSensitiveDataLogging(true)
                 .UseLoggerFactory(new LoggerFactory().AddConsole((category, level) =>
                    level == LogLevel.Information &&
                    category == DbLoggerCategory.Database.Command.Name, true));
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Defininindo Chave Composta (muitos-para-muitos):
            modelBuilder.Entity<AlunoCurso>().HasKey(sc => new { sc.AlunoId, sc.CursoId });
        }
    }
}
