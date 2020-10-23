-- Cursor explicito:

declare
	pname person.name%type;
	pbirthday person.birthday%type;
	cursor cperson is 
		select name, birthday from person;
begin
	open cperson;
	loop fetch cperson into pname, pbirthday;
		dbms_output.put_line(pname || ' - ' || pbirthday);
		exit when cperson%notfound;
	end loop;
	close cperson;
end;