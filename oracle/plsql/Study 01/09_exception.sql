declare
	valor1 number(2);
	valor2 number(2);
	result number(2);
	linha person%ROWTYPE;

procedure exception01 is
begin
	valor1 := 10;
	valor2 := 0;
	result := valor1/valor2;
	dbms_output.put_line('Result: ' || result);
	exception
		when ZERO_DIVIDE then
			dbms_output.put_line('Divisão por zero.');
		when OTHERS then
			dbms_output.put_line('Outros erros.');
end;

procedure exception02 is
begin
	select * into linha from person where id = 2121;
	dbms_output.put_line('Encontrado.');
	exception
		when NO_DATA_FOUND then
			dbms_output.put_line('Não encontrado.');
		when OTHERS then
			dbms_output.put_line('Outros erros.');
end;

begin
	exception01();
 	exception02();
end;