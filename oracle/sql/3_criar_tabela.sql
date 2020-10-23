CREATE TABLE PERSON
(
	id integer not null,
	name varchar(45) not null,
	email varchar(45),
	salary decimal(12,2),
	birthday date,
	gender char(1),
	primary key(id)
);
