-- Uso básico dbms_output:
declare
begin
	for p in (select * from person) loop
		dbms_output.put_line(p.name);
	end loop;
end;