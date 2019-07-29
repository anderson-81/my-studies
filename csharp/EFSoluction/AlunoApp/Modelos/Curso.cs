using System;
using System.Collections.Generic;
using System.Text;

namespace AlunoApp.Modelos
{
    class Curso
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }

        // Relacionamento muitos-para-muitos
        public ICollection<AlunoCurso> AlunoCurso { get; set; }
    }
}
