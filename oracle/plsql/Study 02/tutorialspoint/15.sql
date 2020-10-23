declare
	qtd number(2);
begin 
	update person set name = 'Mary J.' where id = 1;
	if sql%found then
		qtd := sql%rowcount;
		if (qtd = 1) then
			dbms_output.put_line(qtd || ' registro foi atualizado.');
		else
			dbms_output.put_line(qtd || ' registros foram atualizados.');
		end if;
	elsif sql%notfound then
		dbms_output.put_line('Não encontrado.');
	end if;
end;