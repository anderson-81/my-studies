-- set serveroutput on;

declare
	contador number(2);

-- loop
procedure ploop is
begin
	contador := 1;
	loop
		dbms_output.put_line(contador);
		contador := contador + 1;
		exit when contador = 10;
	end loop;
	dbms_output.put_line('***********************************');
end;

-- While
procedure pwhile is
begin
	contador := 1;
	while contador < 10 loop
		dbms_output.put_line(contador);
		contador := contador + 1;
	end loop;
	dbms_output.put_line('***********************************');
end;

-- For
procedure pfor is
begin
	for i in 1..10 loop
		dbms_output.put_line(i);
	end loop;
	dbms_output.put_line('***********************************');
end;

-- For (reverse):
procedure pforreverse is
begin
	for i in reverse 1..10 loop
		dbms_output.put_line(i);
	end loop;
	dbms_output.put_line('***********************************');
end;

begin
	ploop();
	pwhile();
	pfor();
	pforreverse();
end;