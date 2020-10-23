/*
Orientação a Objetos

O uso de objetos permite implementar objetos do mundo real com estrutura específica de dados e métodos para operá-lo. Objetos têm atributos e métodos. Atributos são propriedades de um objeto e são usados ​​para armazenar o estado de um objeto; e métodos são usados ​​para modelar seu comportamento.

*/

-- Criando o Objeto:
-- Obs: Não posso ter uma tabela criada com o mesmo nome.

declare
	stmt varchar2(4000);
	p people;
	r people;
procedure create_people_object is
begin
	stmt := '
						create or replace type people as object
						(
							id integer,
							name varchar2(45),
							member procedure display,
							member function getdata return people
						);
					';
	execute immediate stmt;
end;

procedure create_people_object_body is
begin
	stmt := '
						create or replace type body people as
							member procedure display is
							begin
								dbms_output.put_line(id || '' - '' || name);
							end display;
							
							member function getdata return people is
							begin
								return self;
							end getdata;
						end;
					';
	execute immediate stmt;
end;

-- Instanciando o Objeto:
begin
	create_people_object();
	create_people_object_body();
	
	p := people(33, 'Jason');
	dbms_output.put_line(p.id || ' - ' || p.name); -- acessando por atributos;
	p.display; -- executando procedure;
	
	r := p.getdata; -- executando function;
	dbms_output.put_line(r.id || ' - ' || r.name); -- acessando os atributos do objeto retornado pela function;
end;