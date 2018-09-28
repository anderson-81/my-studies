using infraBlog.Mappings;
using libBlog;
using System;
using System.Data.Entity;

namespace infraBlog.DataContexts
{
    //Espelho para o banco de dados.

    // DbContext:
    //     A DbContext instance represents a combination of the Unit Of Work and Repository
    //     patterns such that it can be used to query from a database and group together
    //     changes that will then be written back to the store as a unit.  DbContext
    //     is conceptually similar to ObjectContext.
    public class BlogDataContext : DbContext // Referencia do Entity Framework
    {
        //Após, eu instalar o Entity Framework...

        public BlogDataContext()
            : base("BlogConnectionString")
        {

            // Database:
            //     An instance of this class is obtained from an System.Data.Entity.DbContext
            //     object and can be used to manage the actual database backing a DbContext
            //     or connection.  This includes creating, deleting, and checking for the existence
            //     of a database.  Note that deletion and checking for existence of a database
            //     can be performed using just a connection (i.e. without a full context) by
            //     using the static methods of this class.

            // SetInitializer:
            //     Sets the database initializer to use for the given context type. The database
            //     initializer is called when a the given System.Data.Entity.DbContext type
            //     is used to access a database for the first time.  The default strategy for
            //     Code First contexts is an instance of System.Data.Entity.CreateDatabaseIfNotExists<TContext>.


            Database.SetInitializer<BlogDataContext>(new BlogDataContextInitializer());  //Inicializando o banco de dados.
        }

        //Criar propriedades "listas" (coleções que podem ser pesquisadas) do projeto mediante as classes criadas.
        // DbSet:
        //     A DbSet represents the collection of all entities in the context, or that
        //     can be queried from the database, of a given type. DbSet objects are created
        //     from a DbContext using the DbContext.Set method.
        public DbSet<Author> Authors
        {
            get;
            set;
        }

        public DbSet<Post> Posts
        {
            get;
            set;
        }

        //Apos definição dos mapeamentos (Mappings)....:
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //Definindo os mapeamentos dentro da aplicação:
            modelBuilder.Configurations.Add(new AuthorMap()); //AuthorMap;
            modelBuilder.Configurations.Add(new PostMap()); //PostMap;

            base.OnModelCreating(modelBuilder);
        }
    }

    //Gerar uma classe para inicializar o banco de dados.
    public class BlogDataContextInitializer : DropCreateDatabaseIfModelChanges<BlogDataContext>
    {
        // DropCreateDatabaseIfModelChanges:
        //     An implementation of IDatabaseInitializer that will DELETE, recreate, and
        //     optionally re-seed the database only if the model has changed since the database
        //     was created.

        protected override void Seed(BlogDataContext context)
        {
            //Opcionalmente: Inserção de dados nas classes em sua inicialização.
            //Authors
            context.Authors.Add(new Author() { Id = 1, Name = "Anderson" });
            context.Authors.Add(new Author() { Id = 2, Name = "Maurina" });
            context.SaveChanges(); //Atributos "PAI" tem que gravar primeiro.

            //Posts
            context.Posts.Add(new Post() { Id = 1, Title = "Lorem Ipsum project.", Text = "Lorem Ipsum project. Lorem Ipsum project. Lorem Ipsum project. Lorem Ipsum project. Lorem Ipsum project. Lorem Ipsum project. Lorem Ipsum project. Lorem Ipsum project. Lorem Ipsum project.", AuthorId = 1, dateCreate = new DateTime().Date });
            context.Posts.Add(new Post() { Id = 1, Title = "Programando em C#", Text = "Programando em C#. Programando em C#. Programando em C#. Programando em C#. Programando em C#. Programando em C#. Programando em C#. Programando em C#. Programando em C#. Programando em C#. ", AuthorId = 1, dateCreate = new DateTime().Date });
            context.Posts.Add(new Post() { Id = 1, Title = "Cozinhando com carinho ", Text = "Cozinhando com carinho. Cozinhando com carinho. Cozinhando com carinho. Cozinhando com carinho. Cozinhando com carinho. Cozinhando com carinho. Cozinhando com carinho. Cozinhando com carinho.", AuthorId = 2, dateCreate = new DateTime().Date });
            context.SaveChanges();

            // Seed:
            //     A method that should be overridden to actually add data to the context for
            //     seeding.  The default implementation does nothing.
            base.Seed(context);
        }
    }
}
