unit Unit2;

interface

uses
  SysUtils,
  Unit1,
  Unit3,
  Unit4,
  Unit5;

type
  TExecution = class
    public
      procedure Execute1;
      procedure Execute2;
      procedure Execute3;
      procedure Execute4;
  end;

implementation

(* Execute *)
procedure TExecution.Execute1;
var
  pp: Unit1.PhysicalPerson;
begin
  pp:= Unit1.PhysicalPerson.create(1,'John','43276598711');
  writeln(pp.toString);
end;

procedure TExecution.Execute2;
var
  pp: Unit3.PhysicalPerson;
begin
  pp:= Unit3.PhysicalPerson.create(2,'Mary','31254534254');
  writeln(pp.toString);
end;

procedure TExecution.Execute3;
var
  pp: Unit4.PhysicalPerson;
begin
  pp:= Unit4.PhysicalPerson.create(2,'Jason','52534253242');
  writeln(pp.toString);
end;

procedure TExecution.Execute4;
begin
  Unit5.TMyStatic.greeting('Anderson');
end;

end.



















