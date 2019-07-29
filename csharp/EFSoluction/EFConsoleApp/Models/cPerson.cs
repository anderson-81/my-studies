using System;
using System.Collections.Generic;
using System.Text;

namespace EFConsoleApp.Models
{
    public class cPerson
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public decimal Salary { get; set; }
        public DateTime Birthday { get; set; }
        public char Gender { get; set; }
        //public bool Status { get; set; } // Adicionado mediante atualização.

        public override string ToString()
        {
            return String.Format("{0} - {1} - {2} - {3} - {4} - {5}", this.Id, this.Name, this.Email, this.Salary, this.Birthday, this.Gender);
        }
    }
}
