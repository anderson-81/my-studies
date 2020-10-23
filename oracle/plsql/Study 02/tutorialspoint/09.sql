declare
	saldo decimal(12,2) := 3214.87;
	opc integer;
begin
	
	if (saldo > 0) then
		dbms_output.put_line('Positivo');
	elsif (saldo = 0) then
		dbms_output.put_line('Zerado');
	else
		dbms_output.put_line('Negativo');
	end if;
	
	---
	
	opc := 2;
	case opc
		when 1 then
			dbms_output.put_line('Opção 01');
		when 2 then
			dbms_output.put_line('Opção 02');
		when 3 then
			dbms_output.put_line('Opção 03');
		else
			dbms_output.put_line('Inválido');
	end case;
	
	---
	
	opc := 3;
	case 
		when opc = 1 then
			dbms_output.put_line('Opção 01');
		when opc = 2 then
			dbms_output.put_line('Opção 02');
		when opc = 3 then
			dbms_output.put_line('Opção 03');
		else
			dbms_output.put_line('Inválido');
	end case;

end;




