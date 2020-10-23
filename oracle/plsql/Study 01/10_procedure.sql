declare
	proc1 varchar2(4000) := '
		
		-- Procedure greeting:
		
		create or replace procedure greeting(name varchar2) is
		begin
			dbms_output.put_line(''Hello, '' || name || '' !'');
		end;
	
	';

	proc2 varchar2(4000) := '
		
		-- Procedure para incluir registro de person:
		
		create or replace procedure insert_person
		(
			id integer,
			name varchar2,
			email varchar2,
			salary decimal,
			birthday date,
			gender char
		) 
		is
		begin
			insert into person values(id, name, email, salary, birthday, gender);
			dbms_output.put_line(''Inserido com sucesso.'');
		end;
	
	';

-- Testando as procedure armazenadas:
begin
	execute immediate proc1;
	execute immediate proc2;
 	greeting('Anderson');
 	insert_person(8, 'Joana', 'joana@eweuwyew.com', 3000.00, to_date('12/11/1981', 'DD/MM/YYYY'), 'M'); 
 	execute immediate 'delete from person where id = 8';
 	dbms_output.put_line('Person with id = 8 deleted.');
end;
