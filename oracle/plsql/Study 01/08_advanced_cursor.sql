-- Explicit cursor:
declare 
	p person%ROWTYPE;
	cursor person_cursor(psalary number) is
		select * from person;
begin
	dbms_output.put_line('------------------------------------------------');
	dbms_output.put_line('|Listagem de pessoas com salário acima de 2500:|');
	dbms_output.put_line('------------------------------------------------');
	open person_cursor(2500);
	loop
		fetch person_cursor into p;  
		-- exit when person_cursor%ROWCOUNT > 2 or person_cursor%NOTFOUND;
		exit when person_cursor%NOTFOUND;
		dbms_output.put_line(p.name || ' - ' || p.birthday);
	end loop;
	close person_cursor;
	
	------------------
	
	dbms_output.put_line('------------------------------------------------');
	dbms_output.put_line('|Listagem de pessoas:                          |');
	dbms_output.put_line('------------------------------------------------');
	open person_cursor(0);
	loop
		fetch person_cursor into p;  
		-- exit when person_cursor%ROWCOUNT > 2 or person_cursor%NOTFOUND;
		exit when person_cursor%NOTFOUND;
		dbms_output.put_line(p.name || ' - ' || p.birthday);
	end loop;
	close person_cursor;
end;