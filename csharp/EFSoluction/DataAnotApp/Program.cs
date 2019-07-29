using DataAnotApp.Models;
using System;

namespace DataAnotApp
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var context = new AppDbContext())
            {
                try
                {
                    context.Database.EnsureDeleted();
                    context.Database.EnsureCreated();

                    context.Database.BeginTransaction();

                    context.Add(new Pessoa
                    {
                        Nome = "John",
                        Email = "john@gsjhgdsjhds.com",
                        Sexo = 'M',
                        Salario = 3333,
                        DataNasc = new DateTime(1981, 11, 12),
                        Status = true
                    });

                    context.SaveChanges();

                    context.Database.CommitTransaction();

                    Console.WriteLine("Successfully added.");
                }
                catch (Exception ex)
                {
                    context.Database.RollbackTransaction();
                    Console.WriteLine("Error: {0}", ex.Message);
                }
            }

            Console.ReadKey();
        }
    }
}
