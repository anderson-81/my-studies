using System;
using System.Collections.Generic;
using System.Text;

namespace AlunoApp.Modelos
{
    /* Relacionamento "muitos-para-muitos" */

    class AlunoCurso
    {
        public int AlunoId { get; set; }
        public Aluno Aluno { get; set; }

        public int CursoId { get; set; }
        public Curso Curso { get; set; }
    }
}
