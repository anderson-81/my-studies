program PJDateTime;

{$APPTYPE CONSOLE}

uses
  SysUtils;

var
  c: char;
  year, month, day, hr, min, sec, ms: Word;
begin
  writeln('Current time: ' + TimeToStr(Time));
  writeln('Current Date: ' + DateToStr(Date));
  writeln('Current Date: ' + DateTimeToStr(Now));

  writeln;
  writeln;
  
  writeln('Details of Date: ');
  DecodeDate(Date,year,month,day);
  writeln (Format ('Day: %d',[day]));
  writeln (Format ('Month: %d',[month]));
  writeln (Format ('Year: %d',[year]));
  writeln;

  writeln('Details of Time: ');
  DecodeTime(Time,hr, min, sec, ms);
  writeln (format('Hour: %d',[hr]));
  writeln (format('Minutes: %d',[min]));
  writeln (format('Seconds: %d',[sec]));
  writeln (format('Milliseconds: %d',[hr]));

  read(c);
end.
