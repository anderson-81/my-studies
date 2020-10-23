program PJPointer;

{$APPTYPE CONSOLE}

uses
  SysUtils;

type
  // Criando ponteiro para integer:
  ptvetor = ^integer;

  // Ponteiro para Ponteiro:
  ptnumber = ^integer;
  ptptnumber = ^ptnumber;

procedure ProcPonteiroVariavel;
var
  num: integer;

  // Criando um ponteiro para inteiro;
  ptr: ^integer;
begin
  num := 13;

  // Atribuindo um endereço de uma variável a um ponteiro.
  ptr := @num;

  // Atribuindo um novo valor:
  ptr^:= 33;

  writeln(ptr^);
end;

procedure ProcPonteiroNIL;
var
  // Criando um ponteiro para inteiro;
  pnull: ^integer;
  y: ^word;
begin
  pnull := nil;
  y := addr(pnull);
  writeln(pnull^);
end;


procedure ProcPonteiroIncDec;
var
  num: integer;

  // Criando um ponteiro para inteiro;
  ptr: ^integer;
  i : integer;
begin
  num := 13;

  // Atribuindo um endereço de uma variável a um ponteiro.
  ptr := @num;

  // Increntando:
  i := 0;
  while (i < 10) do
  begin
    ptr^:= ptr^ + 1;
    i := i + 1;
  end;

  writeln(ptr^);

  // Decrementando:
  i := 10;
  while (i > 4) do
  begin
    ptr^:= ptr^ - 1;
    i := i - 1;
  end;

  writeln(ptr^);
end;

procedure ProcPonteiroParaVetor;
var
  vetor: array [1..10] of integer;
  pvetor: array [1..10] of ptvetor;
  i : integer;
begin
  {
    // Criando ponteiro para integer:
    type
      ptvetor = ^integer;
  }

  for i:=1 to 10 do
  begin
     vetor[i] := i * 3;
  end;

  for i:=1 to 10 do
  begin
     pvetor[i] := @vetor[i];
  end;

  for i:=1 to 10 do
  begin
     writeln(pvetor[i]^);
  end;
end;

procedure ProcPonteiroParaPonteiro;
var
  // Ponteiro para Ponteiro:
  {
    type
      ptnumber = ^integer;
      ptptnumber = ^ptnumber;
  }

  pt: ptnumber;
  ptpt: ptptnumber;
  number: integer;
  n: ^word;
begin
  number := 13;
  pt := @number;
  ptpt := @pt;

  n := addr(ptpt);

  // Imprimindo o valor do endereço do ponteiro apontando pelo ponteiro.
  writeln(ptpt^^);
end;


procedure ProcPassarPonteiro(p:ptnumber);
begin
  writeln(p^);
end;


function FuncReturnPonteiro:ptnumber;
var
  p: ptnumber;
  n: integer;
begin
  n := 7;
  p := @n;
  result := p;
end;

var
  c : char;
  n : integer;
  p : ptnumber;
begin
  ProcPonteiroVariavel;
  // ProcPonteiroNIL;
  ProcPonteiroIncDec;
  ProcPonteiroParaVetor;
  ProcPonteiroParaPonteiro;

  n := 33;
  p := @n;
  ProcPassarPonteiro(p);

  // Retornando ponteiro de uma função.
  Writeln(FuncReturnPonteiro^);

  read(c);
end.
