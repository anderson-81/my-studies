-- Registros baseados em tabela

declare
	linha1 person%rowtype;
	---
	cursor cperson is select name, birthday from person; 
	linha2 cperson%rowtype;
	---
	type people is record
	(
		id integer,
		name varchar2(45),
		email varchar2(45),
		salary decimal(12,2),
		birthday date,
		gender char(1)
	);
	p1 people;
	p2 people;
	---
-- select linha to table:
procedure selectintotable is	
begin
	dbms_output.put_line('----------------------------------------------------');
	dbms_output.put_line('Retornando um registro: ');
	select * into linha1 from person where id = 1;
	dbms_output.put_line(linha1.name || ' - ' || linha1.birthday);
	dbms_output.put_line('----------------------------------------------------');
end;
-- 
-- Registros com base no cursor:
procedure getbasecursor is
begin
  dbms_output.put_line('----------------------------------------------------');
	dbms_output.put_line('Retornando com base no cursor: ');
	open cperson;
	loop fetch cperson into linha2;
		dbms_output.put_line(linha2.name || ' - ' || linha2.birthday);
		exit when cperson%notfound;
	end loop;
	close cperson;
	dbms_output.put_line('----------------------------------------------------');
end;
-- 
-- show person:
procedure showpeople(person people) is
begin
	dbms_output.put_line('----------------------------------------------------');
	dbms_output.put_line('Show único registro: ');
	dbms_output.put_line(person.id || ' - ' || person.name || ' - ' || person.email || ' - ' || person.salary || ' - ' || person.birthday || ' - ' || person.gender);
	dbms_output.put_line('----------------------------------------------------');
end;
-- 
-- 
begin
	selectintotable();
	getbasecursor();
	
	p1.id := 123;
	p1.name := 'Mary J.';
	p1.email := 'maryj@yeuwyeuwe.com';
	p1.salary := 1234.56;
	p1.birthday := to_date('12/11/1981', 'dd/mm/yyyy');
	p1.gender := 'F';
	showpeople(p1);
end;