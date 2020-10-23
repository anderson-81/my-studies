declare
	message varchar2(45) := 'hELlO, wOrLD!';
begin
	dbms_output.put_line(upper(message));
	dbms_output.put_line(lower(message));
	dbms_output.put_line(initcap(message));
	dbms_output.put_line(upper(substr(message,7,11)));
	dbms_output.put_line(instr(message, 'w'));
	dbms_output.put_line(RTRIM(message,'.')); 
	dbms_output.put_line(LTRIM(message, '.')); 
	dbms_output.put_line(TRIM( '.' from message)); 
end;