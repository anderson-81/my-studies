-- Criando a coluna status do tipo char na tabela:
alter table person add status integer;

-- Modificando a coluna status de char para integer na tabela:
alter table person modify status char(1);

-- Excluindo a coluna status da tabela:
alter table person drop column status;






