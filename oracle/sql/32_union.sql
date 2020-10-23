-- É preciso unificar um campo com outro.
-- Preciso respeitar a quantidade exata de campos unificados.

-- create table client
-- (
-- 	id integer not null,
-- 	name varchar2(45) not null,
-- 	primary key(id)
-- );
-- 


-- insert into client values(1, 'João');
-- insert into client values(2, 'Juliana');
-- insert into client values(3, 'Victoria');
-- insert into client values(4, 'Carmen');

-- UNION:

select name from person
union -- union all
select name from client


