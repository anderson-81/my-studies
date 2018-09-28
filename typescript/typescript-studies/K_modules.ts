/*
    TypeScript - Módulos
        Um módulo é projetado com a idéia de organizar código escrito em TypeScript. 
        Os módulos são amplamente divididos em -
            Módulos Internos (OBSOLETO)
            Módulos Externos

        Módulo Interno
            Os módulos internos vieram na versão anterior do Typescript. 
            Isso foi usado para agrupar logicamente classes, interfaces, 
            funções em uma unidade e pode ser exportado em outro módulo. 
            Esse agrupamento lógico é denominado namespace na versão mais 
            recente do TypeScript. Portanto, os módulos internos são obsoletos, 
            em vez disso, podemos usar o namespace. Os módulos internos ainda 
            são suportados, mas é recomendado usar o namespace nos 
            módulos internos.

            Sintaxe do módulo interno (antigo)
                module TutorialPoint { 
                export function add(x, y) {  
                    console.log(x+y); 
                } 
            }

*/

module moduleTest{
    export function Example63(){
        console.log("Hello, World!");
    }
}

moduleTest.Example63();

/*
        Módulo Externo
            Módulos externos em TypeScript existem para especificar e carregar 
            dependências entre vários arquivos js externos . Se houver apenas um 
            arquivo js usado, os módulos externos não serão relevantes. 
            Tradicionalmente, o gerenciamento de dependências entre os arquivos 
            JavaScript era feito usando tags de script do navegador (<script> </ script>).
            Mas isso não é extensível, pois é muito linear ao carregar módulos. 
            Isso significa que, em vez de carregar arquivos um após o outro, 
            não há opção assíncrona para carregar módulos. 
            Quando você está programando js para o servidor, por exemplo, NodeJs, 
            você nem tem tags de script.

            Existem dois cenários para carregar arquivos dependentes de js a partir 
            de um único arquivo JavaScript principal.

            Lado do Cliente - Requer JJ
            Lado do servidor - NodeJs

*/

//Importação sem compilar.
import item = require("./Greet");

function Example64(){
    item.Greet();
}

Example64();

/*
        O comando para compilar o arquivo TypeScript principal 
        para sistemas Commonjs é

            tsc --module commonjs Greet.ts
*/

