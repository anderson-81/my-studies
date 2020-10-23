-- PACKAGE

declare

	pckg varchar(4000) := '
	
		-- Criando o pacote (PACKAGE) com as  PROCEDURE/FUNCTIONS sem o corpo (BODY):

		create or replace package package_test as
			procedure procedure01(param varchar2);
			procedure procedure02(param varchar2);
		end package_test;
		
	';
	
	body varchar(4000) := '

		-- Corpo (BODY) do pacote (PACKAGE) com as PROCEDURE/FUNCTIONS:
		
		create or replace package body package_test as
			procedure procedure01(param varchar2) is
			begin
				dbms_output.put_line(''Procedure01: '' || param);
			end;
			procedure procedure02(param varchar2) is
			begin
				dbms_output.put_line(''Procedure02: '' || param);
			end;
		end;
		
	';
---
---
begin
	execute immediate pckg;
 	execute immediate body;
 	package_test.procedure01('Anderson');
 	package_test.procedure02('123');
end;