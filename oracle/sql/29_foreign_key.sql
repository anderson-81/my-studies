drop table city;
drop table state;

create table state
(
	id integer not null,
	name varchar2(45) not null,
	uf char(2) not null,
	primary key(id)
);

insert into state values(1, 'Rio de Janeiro', 'RJ');
insert into state values(2, 'São Paulo', 'SP');
insert into state values(3, 'Rio Grande do Sul', 'RS');
insert into state values(4, 'Bahia', 'BA');

create table city
(
	id integer not null,
	state_id integer not null,
	name varchar2(45) not null,
	primary key(id),
	foreign key (state_id) references state (id)
);

insert into city values(1, 1,'Rio de Janeiro');
insert into city values(2, 4,'Feira de Santana');
insert into city values(3, 3,'Canoas');
insert into city values(4, 2,'São Bernardo do Campo');
insert into city values(5, 1,'Duque de Caxias');
insert into city values(6, 1,'Cabo Frio');
insert into city values(7, 2,'Santo André');
insert into city values(8, 4,'Salvador');
insert into city values(9, 3,'Caxias do Sul');

select city.name, state.uf from state inner join city on state.ID = city.STATE_ID order by uf;







