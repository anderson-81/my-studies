-- Tabelas tabelas para executar os código a seguir:

-- drop table person;

create table person(
	id integer not null,
	name varchar2(45) not null,
	email varchar(45) not null,
	salary decimal(12,2) not null,
	birthday date not null,
	gender char(1) not null,
	constraint pk_person primary key(id)
);

insert into person values(1, 'Mary', 'mary@euweuyw.com', 2500.00, to_date('12/11/1981', 'DD/MM/YYYY'), 'F');
insert into person values(2, 'Anne', 'anne@euweuyw.com', 1500.00, to_date('01/10/1987', 'DD/MM/YYYY'), 'F');
insert into person values(3, 'Lucy', 'lucy@euweuyw.com', 1800.00, to_date('02/01/1992', 'DD/MM/YYYY'), 'F');
insert into person values(4, 'Stela', 'stela@euweuyw.com', 1300.00, to_date('31/08/1989', 'DD/MM/YYYY'), 'F');
insert into person values(5, 'John', 'john@euweuyw.com', 1200.00, to_date('01/03/1975', 'DD/MM/YYYY'), 'F');
insert into person values(6, 'Frank', 'frank@euweuyw.com', 1700.00, to_date('25/04/1978', 'DD/MM/YYYY'), 'M');
insert into person values(7, 'Jason', 'jason@euweuyw.com', 2000.00, to_date('21/08/1981', 'DD/MM/YYYY'), 'M');

-- drop table person;