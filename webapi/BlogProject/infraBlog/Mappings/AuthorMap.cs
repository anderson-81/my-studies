using libBlog;
using System.Data.Entity.ModelConfiguration;

namespace infraBlog.Mappings
{
    public class AuthorMap : EntityTypeConfiguration<Author>
    {
        public AuthorMap()
        {
            //Tabela sem plural.
            ToTable("Author");

            //Definindo chave primária.
            HasKey(a => a.Id);

            //Campo: NAME:
            Property(a => a.Name)
                .HasMaxLength(100)
                .IsVariableLength()
                .IsRequired();
        }
    }
}
