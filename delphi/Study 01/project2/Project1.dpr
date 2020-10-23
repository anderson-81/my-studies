program Project1;

{$APPTYPE CONSOLE}

uses
  SysUtils;

const MAX = 7;


var
  (* Criando um array *)
  arr: array[1..MAX] of integer = (7,33,13,777,3,10,6);
  (* Ponteiro para um array de inteiros *)
  ptr: ^integer; // vai ser um ponteiro de inteiros.
  
  i : integer;

  (* Utilizado como um readkey *)
  c: char;



begin
  // Atribuindo ao ponteiro o endereço de array.
  ptr := @arr;

  for i:=1 to MAX do
  begin
    Writeln(ptr^);
    inc(ptr);
  end;



  read(c);
end.
