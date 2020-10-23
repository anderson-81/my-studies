

declare
  stmt varchar2(4000);
	
-- armazenando functions:
procedure create_function_tosquare is
begin
	stmt := '
				create or replace function tosquare(num in number) return number is
				begin
					return (num * num);
				end;
	';
	execute immediate stmt;
end;

-- 

-- criando functions 01:
function somar(num1 number, num2 number) return number is
begin
	return num1 + num2;
end;

-- criando functions 02:
function subtrair(num1 number, num2 number) return number is
begin
	return num1 - num2;
end;

/*
> ORA-06550: line 5, column 4:
PLS-00103: Encountered the symbol "end-of-file" when expecting one of the following:

   begin function pragma procedure
*/

begin
	dbms_output.put_line(somar(10,3));
	dbms_output.put_line(subtrair(10,3));
	dbms_output.put_line(tosquare(7)); -- chamando uma função armazenada.
end;