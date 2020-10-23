declare
	num1 number(2);
	num2 number(2);
	rslt number(2);
begin
	num1 := 10;
	num2 := 0;
	rslt := num1 / num2;
	dbms_output.put_line(rslt);
  exception
		when ZERO_DIVIDE then
			dbms_output.put_line('Divisão por zero.');
		when OTHERS then
			dbms_output.put_line('Outros erros.');
end;

