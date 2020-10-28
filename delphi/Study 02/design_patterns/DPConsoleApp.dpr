program DPConsoleApp;

{$APPTYPE CONSOLE}

uses
  SysUtils,
  USingleton in 'USingleton.pas',
  UFactory in 'UFactory.pas',
  UFacade in 'UFacade.pas';

var
  obj1 : TSingletonClass;
  factory : TFactory;
  pp : TPhysicalPerson;
  temp : string;
begin
  obj1 := TSingletonClass.getInstance;
  obj1.ShowMessage('Hello, World!');
  factory := TFactory.Create;
  pp := factory.CreatePhysicalPerson(123, 'Anne', StrToDate('10/10/1990'), 'M');
  Writeln;

  writeln('FACTORY:');
  Write(pp.toString);
  Writeln;

  TFacade.getInstance.Insert_PhysicalPerson(123, 'Anne', StrToDate('10/10/1990'), 'M');
  read(temp);
end.
