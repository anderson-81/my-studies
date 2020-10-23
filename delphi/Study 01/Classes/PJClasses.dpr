program PJClasses;

{$APPTYPE CONSOLE}

uses
  SysUtils,
  Unit1 in 'Unit1.pas',
  Unit2 in 'Unit2.pas',
  Unit3 in 'Unit3.pas',
  Unit4 in 'Unit4.pas',
  Unit5 in 'Unit5.pas';

var
  e : TExecution;
  c : char;
begin
  e := TExecution.Create;
  e.Execute1;
  e.Execute2;
  e.Execute3;
  e.Execute4;
  read(c);
end.
