unit UCalc;

interface

procedure sum(num1:Integer; num2:Integer);
procedure sub(num1:Integer; num2:Integer);
procedure mlt(num1:Integer; num2:Integer);
procedure dvd(num1:Integer; num2:Integer);
// procedure mdl(num1:Integer; num2:Integer);

implementation

procedure sum(num1:Integer; num2:Integer);
begin
  writeln(num1 + num2);
end;

procedure sub(num1:Integer; num2:Integer);
begin
  writeln(num1 - num2);
end;

procedure mlt(num1:Integer; num2:Integer);
begin
  writeln(num1 * num2);
end;

procedure dvd(num1:Integer; num2:Integer);
begin
  writeln(num1 / num2);
end;

{
procedure mdl(num1:Integer; num2:Integer);
begin
  writeln(num1 % num2);
end;
}

end.
