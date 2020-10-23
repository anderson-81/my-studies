-- drop table tabela2;
-- drop table tabela1;

create table tabela1
(
	id integer not null,
	primary key(id)
);

create table tabela2
(
	id integer not null,
	tabela1_id integer not null,
	primary key(id),
	foreign key(tabela1_id) references tabela1(id) on delete cascade
);

insert into tabela1 values(1);
insert into tabela1 values(2);
insert into tabela1 values(3);
insert into tabela1 values(4);
insert into tabela1 values(5);
insert into tabela1 values(6);
insert into tabela1 values(7);

insert into tabela2 values(1,3);
insert into tabela2 values(2,1);
insert into tabela2 values(3,5);
insert into tabela2 values(4,3);
insert into tabela2 values(5,3);
insert into tabela2 values(6,4);
insert into tabela2 values(7,5);

select tabela2.id as "tabela 02", tabela1.id AS "tabela 01" 
from tabela1 inner join tabela2 
on tabela1.ID = tabela2.TABELA1_ID 
where tabela1.id = tabela2.TABELA1_ID 
order by tabela1.id;

delete from tabela1 where id = 7;  




























