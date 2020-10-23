-- Tabela por índice:
declare
	type salaries is table of number(12,2) index by varchar2(45);
	salary_list salaries;
	name varchar2(45);
begin
	-- setando itens:
	salary_list('Anderson') := 4215.11;
	salary_list('Anne') := 3333.11;
	salary_list('Frank') := 1111.11;
	
	-- quantidade de itens:
	dbms_output.put_line('Quantidade de registros: ' || salary_list.COUNT); 
	
	-- setando o primeiro item do registro:
	name := salary_list.first();
	
	-- correndo o vetor:
	while name is not null loop
		dbms_output.put_line(name || ' - ' || to_char(salary_list(name)));
		name := salary_list.next(name);
	end loop;
end;

