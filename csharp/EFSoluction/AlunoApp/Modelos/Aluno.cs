using System;
using System.Collections.Generic;
using System.Text;

namespace AlunoApp.Modelos
{
    class Aluno
    {
        public int Id { get; set; }
        public string Nome { get; set; }

        // Relacionamento muitos-para-muitos
        public ICollection<AlunoCurso> AlunoCurso { get; set; }
    }
}
