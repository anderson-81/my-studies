-- PACKAGE

declare
	stmt varchar2(4000);
---
procedure createpackage is
begin
	stmt := '
						-- 1 - Criando o pacote:
						create or replace package mypackage is
							procedure hello(name in varchar2);
						end mypackage;
					';
	execute immediate stmt;
	
	stmt := '
						-- 2 - Criando o corpo (BODY) do pacote:
						create or replace package body mypackage is
							procedure hello(name in varchar2) is
							begin
								dbms_output.put_line(''Hello, '' || name || ''!'');
							end;
						end mypackage;
					';
	execute immediate stmt;
end;
---
---
begin
	mypackage.hello('Anderson');
end;

  