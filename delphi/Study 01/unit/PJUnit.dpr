program PJUnit;

{$APPTYPE CONSOLE}

uses
  SysUtils,
  UCalc in 'UCalc.pas';

var
  c: char;
  num1, num2: integer;

begin
  num1 := 10;
  num2 := 3;
  sum(num1,num2);
  sub(num1,num2);
  mlt(num1,num2);
  dvd(num1,num2);
  read(c);
end.
