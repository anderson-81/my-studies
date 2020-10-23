declare
	num1 number;
	num2 number;
	rslt number;
	exception_dividir_por_zero exception;
begin
	num1 := 1;
	num2 := 0;
	if (num2 = 0) then
		raise exception_dividir_por_zero;
	end if;
	rslt := num1 / num2;
	dbms_output.put_line( num1 || ' / ' || num2 || ' = ' || rslt);
	exception
		when exception_dividir_por_zero then
		dbms_output.put_line('Erro ao dividir por zero.');
end;