-- Adicionando mais de um campo ao mesmo tempo.
alter table person add (campo1 char(1), campo2 integer); 

-- Excluindo o campo2.
alter table person drop column campo1; 

-- Excluindo o campo1.
alter table person drop column campo2; 

-- Adicionando mais de um campo ao mesmo tempo.
alter table person add (campo1 char(1), campo2 integer); 

-- Excluindo mais de um campo ao mesmo tempo.
alter table person drop (campo1, campo2); 

