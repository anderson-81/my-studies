unit Unit1;

interface

uses
  SysUtils;

type
  Person = class
    private
      id: Integer;
      name: String;
    public
      constructor create; overload;
      constructor create(id:integer;name:string); overload;
      procedure setID(id:integer);
      function getID:integer;
      procedure setName(name:String);
      function getName:String;
  end;

  PhysicalPerson = class(Person)
    private
      cpf: String;
    public
      constructor create; overload;
      constructor create(id:integer;name:string;cpf:String); overload;
      procedure setCPF(id:String);
      function getCPF:String;
      function toString:String;
  end;

implementation

constructor Person.create;
begin
end;

constructor Person.create(id:integer;name:string);
begin
  self.id := id;
  self.name := name;
end;

procedure Person.setID(id:integer);
begin
  self.id := id;
end;

function Person.getID:integer;
begin
  result := self.id;
end;

procedure Person.setName(name:String);
begin
  self.name := name;
end;

function Person.getName:String;
begin
  result := self.name;
end;

(* Classe PhysicalPerson *)
constructor PhysicalPerson.create;
begin
end;

constructor PhysicalPerson.create(id:integer;name:string;cpf:String);
begin
  self.cpf := cpf;
  self.id := id;
  self.name := name;
end;

procedure PhysicalPerson.setCPF(id:String);
begin
  self.cpf := cpf;
end;

function PhysicalPerson.getCPF:String;
begin
  result := self.cpf;
end;

function PhysicalPerson.toString:String;
begin
  result := IntToStr(self.id) + ' - ' + self.name + ' - ' + self.cpf;
end;

end.



















