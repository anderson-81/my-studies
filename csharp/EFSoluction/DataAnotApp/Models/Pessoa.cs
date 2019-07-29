using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DataAnotApp.Models
{
    [Table("Person")]
    public class Pessoa
    {
        [Key]
        [Column("Id")]
        public int Codigo { get; set; }

        [Required]
        [Column("Name", TypeName = "VARCHAR(45)")]
        public string Nome { get; set; }

        [Required]
        [Column(TypeName = "VARCHAR(45)")]
        public string Email { get; set; }

        [Required]
        [Column("Salary", TypeName = "DECIMAL(12,2)")]
        public decimal Salario { get; set; }

        [Required]
        [Column("Birthday", TypeName = "DATE")]
        public DateTime DataNasc { get; set; }

        [Required]
        [Column("Gender", TypeName = "CHAR(1)")]
        public char Sexo { get; set; }

        [NotMapped]
        public bool Status { get; set; }

        [ConcurrencyCheck]
        public byte[] RowVersion { get; set; }
     }
}
