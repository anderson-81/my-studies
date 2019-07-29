using AlunoApp.Modelos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace AlunoApp
{
    class Program
    {

        static void Main(string[] args)
        {
            //Program.InsertDatas();
            ShowAlunosCursos();
            Console.ReadKey();
        }

        private static void ShowAlunosCursos()
        {
            using (var context = new AppDbContext())
            {
                try
                {
                    var alunos = context.Aluno
                        .Include(e => e.AlunoCurso) // Incluir alunoCurso, posteriormente ...
                        .ThenInclude(e => e.Curso)  // inclua cursos (outra parte da relação).
                        .ToList();

                    foreach(var aluno in alunos)
                    {
                        Console.WriteLine("Aluno: {0}", aluno.Nome);

                        var cursos = aluno.AlunoCurso.Select(e => e.Curso); // pegando os cursos relacionados.

                        foreach (var curso in cursos)
                        {
                            Console.WriteLine("\t - {0}", curso.Titulo);
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Erro: {0} ", ex.Message);
                }
            }
        }

        private static void InsertDatas()
        {
            using (var context = new AppDbContext())
            {
                try
                {
                    context.Database.EnsureDeleted();
                    context.Database.EnsureCreated();

                    var cursos = new[]
                    {
                        new Curso{ Titulo = "ASP.NET Core", Descricao = "Programação Web" },
                        new Curso{ Titulo = "Java", Descricao = "Programação Java" },
                        new Curso{ Titulo = "Ruby on Rails", Descricao = "Programação Web em Ruby on Rails." },
                    };

                    var alunos = new[]
                    {
                        new Aluno{ Nome = "John" },
                        new Aluno{ Nome = "Mary" },
                    };

                    // INCLUSÃO (Relacionamento muitos-pra-muitos): 

                    var alunosCursos = new[]
                    {
                        new AlunoCurso{ Aluno = alunos[0], Curso = cursos[0] },
                        new AlunoCurso{ Aluno = alunos[0], Curso = cursos[2] },
                        new AlunoCurso{ Aluno = alunos[1], Curso = cursos[1] },
                        new AlunoCurso{ Aluno = alunos[1], Curso = cursos[2] }
                    };

                    context.AddRange(alunosCursos);

                    context.SaveChanges();
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Erro: {0} ", ex.Message);
                }
            }
        }
    }
}
