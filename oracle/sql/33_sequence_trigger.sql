drop table client;

create table client
(
	id integer not null,
	name varchar2(45) not null,
	constraint pk_client primary key(id)
);

-- insert into client (name) values ('Anderson');

-- ERROR:
-- insert into client (name) values ('Anderson')
-- > ORA-01400: cannot insert NULL into ("ANDERSON"."CLIENT"."ID")
-- 
-- > Time: 0,018s

-- Criando SEQUENCE:































