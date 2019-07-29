using System;
using System.Collections.Generic;
using System.Text;

namespace BookApp.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }

        // Relationship: *..1
        public int AuthorId { get; set; }
        // public Author Author { get; set; }

        // Working with LazyLoading:
        public virtual Author Author { get; set; }

        /* 
         A palavra-chave ou modificador virtual é usado para modificar uma declaração de método, 
         propriedade, indexador ou evento e permitir que ela seja substituída em uma classe derivada. 
         (usando o modificador override)
        */

        public override string ToString()
        {
            return String.Format("{0} - {1} - {2}", Id, Title, Year);
        }
    }
}
