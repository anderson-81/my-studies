using System.Data.Entity.ModelConfiguration;
using blogAPI.Models;

namespace blogAPI.Mappings
{
    public class PostMap : EntityTypeConfiguration<Post>
    {
        public PostMap()
        {
            ToTable("Post");
            
            HasKey(p => p.Id);
            
            Property(p => p.Title)
                .HasMaxLength(50)
                .IsVariableLength()
                .IsRequired();

            Property(p => p.Text)
                .IsMaxLength()
                .IsVariableLength()
                .IsRequired();

            Property(p => p.dateCreate).IsRequired();

            //Nao precisa colocar required em booleano.

            //Class Relationship
            HasRequired(p => p.Author); //Requerendo relacionamento com Author.
        
            //Se fosse HasMany, seria HasMany e na outra classe.
        }
    }
}
