-- Quantidade de linhas atualizadas:
declare
	ret number(3);
begin
	update person set salary = 2500 where id = 4;
	ret := SQL%ROWCOUNT;
	dbms_output.put_line(ret);
end;