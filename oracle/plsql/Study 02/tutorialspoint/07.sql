declare 
	num integer;
begin
	num := 7;
	declare
		num integer := 3;
	begin
		begin
			begin
				dbms_output.put_line(num);
			end;
		end;
	end;
end;