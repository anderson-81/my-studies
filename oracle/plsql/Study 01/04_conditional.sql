declare
	pname varchar2(45);
	psalary number(12,2);
	saldo number(15,2);
	code integer;
	opc integer;
	description varchar2(45);
	
procedure condition01 is	
begin
	select name, salary into pname, psalary from person where id = 1;
	if psalary > 2000 then
		dbms_output.put_line('Salario acima de 2000.');
	elsif psalary = 0 then
		dbms_output.put_line('Zerado.');
	else
		dbms_output.put_line('Salario abaixo de 2000.');
	end if;
end;

procedure condition02 is	
begin
	saldo := 0.0;
	if saldo > 0 then
		dbms_output.put_line('Tem saldo.');
	elsif saldo = 0 then
		dbms_output.put_line('Zerado.');
	else
		dbms_output.put_line('Em débito.');
	end if;
end;

-- Alterando salário mediante condição:
procedure condition03 is	
begin
	code := 1;
	select name, salary into pname, psalary from person where id = code;
	if psalary < 2000 then
		-- update person set salary = psalary + 1000 where id = code; 
		update person set salary = psalary + 0 where id = code; 
		dbms_output.put_line('Alterado.');
	else
		dbms_output.put_line('Não alterado.');
	end if;
end;

-- Uso do case ...when ...else:
procedure condition04 is	
begin
	opc := 2;
	description := 
		case opc 
			when 1 then 
				'Opção 01'
			when 2 then 
				'Opção 02'
			when 3 then 
				'Opção 03'
			else 
				'Outra opção'
	end;
	dbms_output.put_line(description);
end;

begin
	condition01;
	condition02;
	condition03;
	condition04;
end;