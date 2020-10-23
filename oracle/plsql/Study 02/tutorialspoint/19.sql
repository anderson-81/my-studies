declare
	str1 varchar(4000);

procedure create_tclient_include is
begin
	str1 := '
						create or replace trigger tclient_include after insert on person
						for each row
						begin
							dbms_output.put_line(''-------------------------------'');
							dbms_output.put_line(''Successfully inserted.'');
							dbms_output.put_line(''-------------------------------'');
							dbms_output.put_line(''ID: '' || :NEW.id);
							dbms_output.put_line(''Name: '' || :NEW.name);
							dbms_output.put_line(''E-mail: '' || :NEW.email);
							dbms_output.put_line(''Salary: '' || :NEW.salary);
							dbms_output.put_line(''Birthday: '' || :NEW.birthday);
							dbms_output.put_line(''Gender: '' || :NEW.gender);
							dbms_output.put_line(''-------------------------------'');
						end;
					';
	dbms_output.put_line('A trigger create_tclient_include criado.');
	execute immediate str1;	
end;

procedure create_tclient_update is
begin
	str1 := '
						create or replace trigger tclient_update
						after update on person
						for each row
						begin
							dbms_output.put_line(''-------------------------------'');
							dbms_output.put_line(''Successfully edited.'');
							dbms_output.put_line(''-------------------------------'');
							dbms_output.put_line(''-------------------------------'');
							dbms_output.put_line(''Previous data:'');
							dbms_output.put_line(''-------------------------------'');
							dbms_output.put_line(''ID: '' || :OLD.id);
							dbms_output.put_line(''Name: '' || :OLD.name);
							dbms_output.put_line(''E-mail: '' || :OLD.email);
							dbms_output.put_line(''Salary: '' || :OLD.salary);
							dbms_output.put_line(''Birthday: '' || :OLD.birthday);
							dbms_output.put_line(''Gender: '' || :OLD.gender);
							dbms_output.put_line(''-------------------------------'');
							dbms_output.put_line(''Updated data:'');
							dbms_output.put_line(''-------------------------------'');
							dbms_output.put_line(''ID: '' || :NEW.id);
							dbms_output.put_line(''Name: '' || :NEW.name);
							dbms_output.put_line(''E-mail: '' || :NEW.email);
							dbms_output.put_line(''Salary: '' || :NEW.salary);
							dbms_output.put_line(''Birthday: '' || :NEW.birthday);
							dbms_output.put_line(''Gender: '' || :NEW.gender);
							dbms_output.put_line(''-------------------------------'');
						end;
					';
	execute immediate str1;
	dbms_output.put_line('A trigger create_tclient_update criado.');
end;

begin
	create_tclient_include();
	create_tclient_update();
end;
