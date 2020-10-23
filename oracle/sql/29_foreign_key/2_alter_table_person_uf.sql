-- Alterando a tabela person, adicionando uf (cidade).

-- Adicionando coluna para cidade:
-- alter table person add city_id integer;

-- Adicionando a chave estrangeiro:
-- alter table person add constraint fk_person_city foreign key (city_id) references city(id);

-- Excluindo a chave estrangeira:
-- alter table person drop constraint fk_person_city;

-- Removendo a coluna uf:
-- alter table person drop column uf;

-- select * from person;

-- update person set city_id = NULL where id = 1;

-- Adicionando relação com cidade:
-- update person set city_id = 1 where id = 1;
-- update person set city_id = 4 where id = 2;
-- update person set city_id = 1 where id = 3;
-- update person set city_id = 7 where id = 4;
-- update person set city_id = 5 where id = 5;
-- update person set city_id = 4 where id = 6;
-- update person set city_id = 1 where id = 7;

select * from person;
























