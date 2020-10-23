program PJVariant;

{$APPTYPE CONSOLE}

uses
  SysUtils;

type
  color = (GREEN, YELLOW, BLUE, WHITE, RED);

var
  x: variant;
  c: char;

begin
  x := 'Anderson';
  Writeln(x);
  x := 123;
  Writeln(x);
  x := True;
  Writeln(x);
  x := 4321.99;
  Writeln(x);
  x := 'M';
  Writeln(x);
  x := StrToDate('01/01/2000');
  Writeln(x);
  x := RED;
  Writeln(x);
  read(c);
end.
