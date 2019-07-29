using System;
using System.Collections.Generic;
using System.Text;

namespace FluentAPIApp.Models
{
    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Salary { get; set; }
        public DateTime Birthday { get; set; }
        public char Gender { get; set; }

        //Relacionamento 1 para muitos:
        public ICollection<Car> Cars { get; set; }
    }
}
