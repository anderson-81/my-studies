-- FUNCTION:

-- Função de divisão:
declare

	func1 varchar(4000) := '
		create or replace function dividir(num1 number, num2 number) return number is
		begin
			return num1/num2;
			exception
				when ZERO_DIVIDE then
					dbms_output.put_line(''Divisão por zero.'');
					return 1;
				when OTHERS then
					dbms_output.put_line(''Erro ao dividir.'');
					return -1;
		end;
	';

	func2 varchar(4000) := '
		create or replace function incrSalary(salary number, incr number) 
		return number is
		begin
			return salary + incr;
		end;
	';
---
---
begin
	execute immediate func1;
	execute immediate func2;
 	dbms_output.put_line(dividir(10,0));
 	for p in (select id, name, salary, incrSalary(salary, 500) AS "SALARIOS_ACRESCIDOS_COM_500" from person) loop
 		dbms_output.put_line(p.id || ' - '  || p.name || ' - ' || p.salary || ' - ' || incrSalary(p.salary, 500));
 	end loop;
end;