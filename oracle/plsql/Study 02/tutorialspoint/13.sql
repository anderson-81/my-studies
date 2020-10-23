-- Procedure e Procedure armazenada:
-----------

declare
	str1 varchar2(4000);

-- Criando procedure que nao fica armazenada:
procedure criar_procedure_hello is
begin
	str1 := '
						create or replace procedure hello is
						begin
							dbms_output.put_line(''Hello, World!'');
						end;
				  ';
	 execute immediate str1;
	 dbms_output.put_line('criar_procedure_hello criada.');
end;

--

procedure saudar(name IN varchar2) is 
begin
  dbms_output.put_line('Hello, ' || name || '!');
end;

--

procedure somar(num1 in number, num2 in number) is
begin
	dbms_output.put_line(num1 + num2);
end;

begin
 	somar(10,3);
	criar_procedure_hello();
	saudar('Anderson');
	saudar(name => 'Anderson');
end;