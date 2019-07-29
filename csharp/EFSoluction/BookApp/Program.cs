using BookApp.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BookApp
{
    class Program
    {
        static void Main(string[] args)
        {
            // InsertAuthor();
            // InsertAuthorAndBooks();
            // InsertBooks();
            // ShowAuthorsAndBooks();
            // ShowWithFilter();
            // ShowExplicitLoading();
            // ShowByQuery();

            ShowWithLazyLoading();
            Console.ReadKey();
        }

        private static void ShowWithLazyLoading()
        {
            using (var context = new AppDbContext())
            {
                try
                {
                    var authors = context.Author.Where(a => a.Id == 1);

                    foreach(var author in authors)
                    {
                        Console.WriteLine(author.ToString());

                        foreach (var book in author.Books)
                        {
                            Console.WriteLine(book.ToString());
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error: {0}", ex.Message);
                }
            }
        }
    
        private static void ShowByQuery()
        {
            using (var context = new AppDbContext())
            {
                try
                {
                    Author author = context.Author.Where(a => a.Name == "Dan").FirstOrDefault();

                    IQueryable<Book> books = context.Entry(author).Collection(a => a.Books).Query().Where(b => b.Year > 2000);

                    foreach(var book in books)
                    {
                        Console.WriteLine("{0}", book.Title);
                    }

                    Console.WriteLine("Quantities: {0}", books.Count());
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error: {0}", ex.Message);
                }
            }
        }

        private static void ShowExplicitLoading()
        {
            using (var context = new AppDbContext())
            {
                try
                {
                    // Carregando Propriedade de Referência:
                    Author author = context.Author.Where(a => a.Name == "Dan").FirstOrDefault();

                    context.Entry(author).Collection(a => a.Books).Load();

                    // Carregando Coleção:
                    Book book = context.Book.Where(b => b.Year == 2017).FirstOrDefault();

                    context.Entry(book).Reference(b => b.Author).Load();
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error: {0}", ex.Message);
                }
            }
        }

        private static void ShowWithFilter()
        {
            using (var context = new AppDbContext())
            {
                try
                {
                    var result = context.Author
                        .Where(a => a.Name == "Dan")
                        .Select(a => new
                        {
                            Author = a,
                            BooksAuthor = a.Books
                        })
                        .FirstOrDefault();

                    Console.WriteLine("{0} {1}", result.Author.Name, result.Author.Surname);

                    foreach(var book in result.BooksAuthor)
                    {
                        Console.WriteLine("\t {0} - {1}", book.Title, book.Year);
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error: {0}", ex.Message);
                }
            }
        }

        private static void ShowAuthorsAndBooks()
        {
            using (AppDbContext context = new AppDbContext())
            {
                try
                {
                    //foreach (var author in context.Author.Include(b => b.Books))
                    //foreach (var author in context.Author.Include("Books"))

                    // Performance (only show datas):
                    foreach (var author in context.Author.AsNoTracking().Include("Books"))
                    {
                        Console.WriteLine(author.ToString());

                        foreach (var book in author.Books)
                        {
                            Console.WriteLine(book);
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error: {0}", ex.Message);
                }
            }
        }

        private static void InsertBooks()
        {
            using (var context = new AppDbContext())
            {
                try
                {
                    Author author = context.Author.Find(1);

                    if (author != null)
                    {
                        List<Book> books = new List<Book>
                        {
                            new Book { Title = "Book 03", Year = 1998, Author = author },
                            new Book { Title = "Book 04", Year = 2001, Author = author },
                            new Book { Title = "Book 05", Year = 2003, Author = author },
                        };

                        context.Database.BeginTransaction();

                        context.Book.AddRange(books);

                        context.SaveChanges();

                        context.Database.CommitTransaction();

                        Console.WriteLine("Books successfully added.");
                    }
                }
                catch (Exception ex)
                {
                    context.Database.RollbackTransaction();
                    Console.WriteLine("Error: {0}", ex.Message);
                }
            }
        }

        private static void InsertAuthorAndBooks()
        {
            using (var context = new AppDbContext())
            {
                try
                {
                    context.Database.BeginTransaction();

                    context.Author.Add(new Author()
                    {
                        Name = "Dan",
                        Surname = "Brown",
                        Books = new List<Book>()
                        {
                            new Book{ Title = "Book 01", Year = 2017 },
                            new Book{ Title = "Book 02", Year = 2019 },
                        }
                    });

                    context.SaveChanges();

                    context.Database.CommitTransaction();

                    Console.WriteLine("Author and Books successfully added.");
                }
                catch (Exception ex)
                {
                    context.Database.RollbackTransaction();
                    Console.WriteLine("Error: {0}", ex.Message);
                }
            }
        }

        private static void InsertAuthor()
        {
            using (var context = new AppDbContext())
            {
                try
                {
                    context.Database.BeginTransaction();

                    context.Author.Add(new Author()
                    {
                        Name = "Dan",
                        Surname = "Brown"
                    });

                    context.SaveChanges();

                    context.Database.CommitTransaction();

                    Console.WriteLine("Author successfully added.");
                }
                catch (Exception ex)
                {
                    context.Database.RollbackTransaction();
                    Console.WriteLine("Error: {0}", ex.Message);
                }
            }
        }
    }
}
