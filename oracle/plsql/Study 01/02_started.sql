
declare
	name varchar2(45);
	
	pname varchar2(45);
	psalary number(12,2);
	
	ptname person.name%TYPE;
	ptsalary person.salary%TYPE;
	
	linha person%ROWTYPE;
	
-- Hello, World!
procedure hello is
begin
	dbms_output.put_line('Hello, World!');
end;

-- Hello com variável.
procedure hellocomvar is	
begin
	name := 'Anderson';
	dbms_output.put_line('Hello, ' || name || ' !');
end;

-- Uso do select (into):
procedure selectinto is
begin
	select name, salary into pname, psalary from person where id = 1;
	dbms_output.put_line('******************************************');
	dbms_output.put_line('Name: ' || pname);
	dbms_output.put_line('Salary: ' || psalary);
	dbms_output.put_line('******************************************');
end;

-- Uso do select (into) com o tipo retornado pelo select:
procedure selectintotype is
begin
	select name, salary into ptname, ptsalary from person where id = 1;
	dbms_output.put_line('******************************************');
	dbms_output.put_line('Name: ' || ptname);
	dbms_output.put_line('Salary: ' || ptsalary);
	dbms_output.put_line('******************************************');
end;

-- Uso do select (into) com TODOS os tipos retornado pelo select:
procedure selectintorowtype is
begin
	select * into linha from person where id = 1;
	dbms_output.put_line('******************************************');
	dbms_output.put_line('Name : ' || linha.name);
	dbms_output.put_line('Birthday: ' || linha.birthday);
	dbms_output.put_line('******************************************');
end;

begin
	hello();
	hellocomvar();
	selectinto();
	selectintotype();
	selectintorowtype();
end;