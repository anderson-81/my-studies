declare
	-- tipos criados por mim:
  subtype name IS varchar2(45);
	--
	nome CONSTANT name := 'Anderson';
	num1 integer default 0;
begin
	-- nome := 'hgfegqwfegwefw'; -- ERROR!!!
	dbms_output.put_line(nome);
	dbms_output.put_line(num1);
end;