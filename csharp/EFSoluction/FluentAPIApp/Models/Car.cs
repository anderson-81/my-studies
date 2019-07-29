using System;
using System.Collections.Generic;
using System.Text;

namespace FluentAPIApp.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }


        // Relacionamento muitos para 1:
        public Person Person { get; set; }
    }
}
