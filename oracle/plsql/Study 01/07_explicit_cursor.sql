-- Explicit cursor:
declare 
	p person%ROWTYPE;
	cursor person_cursor is
		select * from person;
begin
	open person_cursor;
	loop
		fetch person_cursor into p;  
		exit when person_cursor%ROWCOUNT > 2 or person_cursor%NOTFOUND;
		dbms_output.put_line(p.name || ' - ' || p.birthday);
	end loop;
	close person_cursor;
end;