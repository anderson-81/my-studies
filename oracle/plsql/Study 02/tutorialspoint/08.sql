declare
	nome person.name%TYPE;
	data_de_nascimento person.birthday%TYPE;
begin
	select name, birthday into nome, data_de_nascimento from person where id = 1;
	dbms_output.put_line('Nome: ' || nome || ' - Data de Nascimento: ' || data_de_nascimento);
end;

