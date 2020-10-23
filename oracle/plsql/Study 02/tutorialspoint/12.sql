-- create or replace type people as varray(10) of varchar2(45);

declare
	type parray is varray(10) of varchar2(45);
	people parray;
begin
	people := parray('Fernanda', 'Anne', 'Lucy', 'Joana', 'Carmen');
	dbms_output.put_line(people(5));
	FOR i in 1 .. people.count LOOP 
		dbms_output.put_line(people(i)); 
  END LOOP; 
end;