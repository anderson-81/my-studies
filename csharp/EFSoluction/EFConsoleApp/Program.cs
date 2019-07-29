using EFConsoleApp.Models;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections.Generic;
using System.Linq;

namespace EFConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            InsertPerson(new cPerson {
                Name = "Fernanda",
                Email = "fernanda@ashdsgd.com",
                Salary = 3000,
                Gender = 'F',
                Birthday = new DateTime(1988, 04, 28)
            });
            //UpdatePerson();
            //DeletePerson();

            ListPeople();

            Console.ReadKey();
        }

        public static void ListPeople()
        {
            using (AppDbContext db = new AppDbContext())
            {
                List<cPerson> list = db.Person.ToList();
                foreach (cPerson item in list)
                {
                    Console.WriteLine(item.ToString());
                }

                // ShowStates(db.ChangeTracker.Entries());
            }
        }

        private static void ShowStates(IEnumerable<EntityEntry> entries)
        {
            foreach(var entry in entries)
            {
                Console.WriteLine("State Entity: " +  entry.State.ToString());
            }
        }

        public static void InsertPerson(cPerson person)
        {
            using (AppDbContext db = new AppDbContext())
            {
                /*
                db.Add(new cPerson{
                    Name = "Tania",
                    Email = "tania@gasgdhsgds.com",
                    Salary = 1234,
                    Birthday = new DateTime(1875,11,12),
                    Gender = 'F'
                });
                */
                db.Add(person);

                // State 01:
                ShowStates(db.ChangeTracker.Entries());

                db.SaveChanges();

                // State 02:
                ShowStates(db.ChangeTracker.Entries());
            }
        }

        public static void DeletePerson()
        {
            using (AppDbContext db = new AppDbContext())
            {
                //cPerson person1 = db.Person.First();
                cPerson person2 = db.Person.Find(1);
                //cPerson person3 = db.Person.Last();

                db.Database.BeginTransaction();

                //db.Remove(person);
                db.Entry(person2).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;

                db.SaveChanges();

                db.Database.RollbackTransaction();
            }
        }

        public static void UpdatePerson()
        {
            using (AppDbContext db = new AppDbContext())
            {
                cPerson person2 = db.Person.Find(5);

                person2.Name = "John Paul";
                person2.Email = "johnpaul@gwqretw.com";
                person2.Salary = 1243;
                person2.Birthday = new DateTime(1980, 01, 01);

                db.Database.BeginTransaction();

                //db.Remove(person);
                db.Entry(person2).State = Microsoft.EntityFrameworkCore.EntityState.Modified;

                db.SaveChanges();

                db.Database.CommitTransaction();
            }
        }

        public static void SeedPerson()
        {
            using (AppDbContext db = new AppDbContext())
            {
                if (!db.Person.Any()) // Existe dados no banco?
                {
                    var people = new List<cPerson>
                    {
                        /*
                        new cPerson
                        {
                            Name = "Laura",
                            Email = "laura@sahdgashgds.com",
                            Salary = 4321,
                            Birthday = new DateTime(1981,11,12),
                            Gender = 'F'
                        },
                        */
                        new cPerson
                        {
                            Name = "Paul",
                            Email = "paul@sahdgashgds.com",
                            Salary = 2200,
                            Birthday = new DateTime(1987,01,27),
                            Gender = 'F'
                        },
                        new cPerson
                        {
                            Name = "Anthony",
                            Email = "anthony@sahdgashgds.com",
                            Salary = 3300,
                            Birthday = new DateTime(1965,03, 18),
                            Gender = 'F'
                        }
                    };

                    db.AddRange(people);

                    db.SaveChanges();
                }
                else
                {
                    Console.WriteLine("Database don't empty.");
                }
            }
        }
    }
}
