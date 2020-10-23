program PJRecord;

{$APPTYPE CONSOLE}

uses
  SysUtils;


type
  (* Declarando um REGISTRO ou RECORD. *)
  Person = Record
    id : integer;
    name: string;
    salary: currency;
    birthday: TDateTime;
    gender: char;
  end;

  (* Ponteiro para um REGISTRO ou RECORD. *)
  ptperson = ^Person;


procedure ProcPerson;
var
  p : Person;
begin
  p.id := 123;
  p.name := 'Anderson';
  p.salary := 5432;
  p.birthday := StrToDate('12/11/1990');
  p.gender := 'M';
  writeln(p.name);
end;

function FuncReturnPointerToPerson : ptperson;
var
  // Criando tipo ponteiro para Person:
  pt : ptperson;
begin
  // Criando um objeto Person e atribuindo a um ponteiro do tipo Person:
  new(pt);

  // Atribuindo valores aos atributos:
  pt^.id := 123;
  pt^.name := 'Anderson';
  pt^.salary := 5432;
  pt^.birthday := StrToDate('12/11/1990');
  pt^.gender := 'M';

  // Retornando um ponteiro:
  result := pt;
end;


var
  c : char;
  p : ptperson;
begin
  ProcPerson;

  Writeln(DateToStr(FuncReturnPointerToPerson^.birthday));

  // Destriundo o ponteiro criado na função:
  dispose(FuncReturnPointerToPerson);

  read(c);
end.
