/*
Collections

Neste capítulo, discutiremos as coleções em PL / SQL. Uma   coleção é um grupo ordenado de elementos com o mesmo tipo de dados. Cada elemento é identificado por um índice exclusivo que representa sua posição na coleção.

O PL / SQL fornece três tipos de coleção -

Tabelas de índice por ou matriz associativa
Tabela aninhada
Matriz de tamanho variável ou Varray
*/

DECLARE 
   CURSOR c_person is select name from person; 

   TYPE p_list IS TABLE of person.Name%type INDEX BY binary_integer; 
   lista_de_nomes p_list; 
   contador integer :=0; 

   -- collection 01
   type salarios is table of number index by varchar2(45);
   nome varchar2(45);
   lista_salarios salarios;
   -- collection 01

-- Tabela por INDICE
procedure collection01 is
begin
   dbms_output.put_line('--------------------------------------------------------------------');
   dbms_output.put_line('Collection 01: ');
   dbms_output.put_line('--------------------------------------------------------------------');
      lista_salarios('John') := 1000;
   lista_salarios('Anderson') := 5000;
   lista_salarios('Anne') := 1500;
   lista_salarios('Carla') := 2000;
   lista_salarios('Lucy') := 1300;
   lista_salarios('Carmen') := 1700;
   lista_salarios('Frank') := 1800;
   
   nome := lista_salarios.first;
   while nome is not null loop
      dbms_output.put_line('Nome: ' || nome || ' - Salario: ' || to_char(lista_salarios(nome))); 
      nome := lista_salarios.next(nome);
   end loop;
   dbms_output.put_line('--------------------------------------------------------------------');
end;

BEGIN 
   dbms_output.put_line('--------------------------------------------------------------------');
   dbms_output.put_line('Collection (cursor): ');
   dbms_output.put_line('--------------------------------------------------------------------');
   FOR p IN c_person LOOP 
      contador := contador +1; 
      lista_de_nomes(contador) := p.name; 
      dbms_output.put_line('Pessoa('||contador||'):'||lista_de_nomes(contador)); 
   END LOOP;
   dbms_output.put_line('--------------------------------------------------------------------');
   collection01();
END;