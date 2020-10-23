declare
	-- tipos criados por mim:
  	subtype name IS varchar2(45);
	subtype currency IS decimal(12,2);
	subtype birthday IS date;
	subtype gender IS char(2);
	--
	id integer := 1;
	nome name := 'Anderson';
	data_de_nascimento birthday := to_date('01/01/2000', 'DD/MM/YYYY');
	sexo gender := 'M';
begin
	dbms_output.put_line('OK!');
end;