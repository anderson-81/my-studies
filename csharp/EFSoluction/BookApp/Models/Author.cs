using System;
using System.Collections.Generic;
using System.Text;

namespace BookApp.Models
{
    public class Author
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }

        // Relationship: 1..*
        // Without LazyLoading:
        // public ICollection<Book> Books { get; set; }

        // With LazyLoading:
        public virtual ICollection<Book> Books { get; set; }

        /* 
         A palavra-chave ou modificador virtual é usado para modificar uma declaração de método, 
         propriedade, indexador ou evento e permitir que ela seja substituída em uma classe derivada. 
         (usando o modificador override)
        */

        public override string ToString()
        {
            return String.Format("{0} - {1} {2}", Id, Name, Surname);
        }
    }
}
