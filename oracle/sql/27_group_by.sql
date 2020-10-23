-- adicionando uma coluna UF:
-- alter table person add uf char(2);

-- Atualizar os registros com a inclusão de UF.

-- Quantidade de pessoas separados por UF:

select uf as "Unidade Federativa", count(*) as "Quantidade de pessoas" from person group by uf order by uf ASC; 

select gender as "Sexo", count(*) as "Quantidade de pessoas" from person group by gender order by gender ASC;


