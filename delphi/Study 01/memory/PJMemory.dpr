program PJMemory;

{$APPTYPE CONSOLE}

uses
  SysUtils;

type
  TName = packed array [1..20] of char;

procedure ProcAlocMemory;
var
  name: string;
  pstring: ^string;
begin
  name := 'Anderson';

  // Alocando dinamicamente.
  new(pstring);

  if not assigned(pstring) then
     writeln('PTString not assigned.')
  else
     pstring^ := 'New value!!!';

  writeln(pstring^);

  // Liberando memória:
  freemem(pstring);
end;

{
procedure ProcRedMemory;
var
  name: array[1..100] of char;
  description: ^string;
  desp: string;
begin
   name := 'Zara Ali';
   desp := 'Zara ali a DPS student.';

   description := getmem(30);
      if not assigned(description) then
         writeln('Error - unable to allocate required memory')
      else
         description^ := desp;

   (* Suppose you want to store bigger description *)
   description := reallocmem(description, 100);
   desp := desp + ' She is in class 10th.';
   description^:= desp;
   
   writeln('Name = ', name );
   writeln('Description: ', description^ );
   
   freemem(description);
end;
}


var
  c: char;
begin
  ProcAlocMemory;
  // ProcRedMemory;
  read(c);
end.
