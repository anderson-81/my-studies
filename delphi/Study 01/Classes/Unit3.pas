unit Unit3;

interface

uses
  SysUtils;

type
  IPerson = Interface(IInterface)
    procedure setID(id:integer);
    function getID:integer;
    procedure setName(name:String);
    function getName:String;
  end;

  PhysicalPerson = class(TInterfacedObject, IPerson)
    private
      id: Integer;
      name: String;
      cpf: String;
    public
      constructor create; overload;
      constructor create(id:integer;name:string;cpf:String); overload;
      procedure setCPF(id:String);
      function getCPF:String;
      function toString:String;
      procedure setID(id:integer);
      function getID:integer;
      procedure setName(name:String);
      function getName:String;
  end;

implementation

(* Classe PhysicalPerson *)
procedure PhysicalPerson.setID(id:integer);
begin
  self.id := id;
end;

function PhysicalPerson.getID:integer;
begin
  result := self.id;
end;

procedure PhysicalPerson.setName(name:String);
begin
  self.name := name;
end;

function PhysicalPerson.getName:String;
begin
  result := self.name;
end;

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



















