program Project1;

{$APPTYPE CONSOLE}




uses
  SysUtils;

label 1;

type
  TColors = (Green, Yellow, White, Blue, Red);

  // Criar tipo para um vetor:
  TVetor = array[1..10] of integer;

  // Criar tipo para um matriz:
  TMatrix = array[1..3, 1..4] of integer;

  // Criar Dynamic array:
  TDArray = array of integer;

var
  id: Integer;
  name: String;
  salary: Currency;
  birthday: TDateTime;
  gender: char;
  color: TColors;
  marks: 1 .. 3;
  c : char;
  saldo: Currency;

  opc:char;

  cont : Integer;

  i : Integer;

  str1: String;
  str2: String;

  opt : Boolean;

  // Criando um array do tipo declarado:
  vetor: TVetor;

  // Criando um array do tipo declarado:
  matrix: TMatrix;

  x,y: Integer;

  // Criando um dynamic array do tipo declarado:
  darray: TDArray;

  // Compactados:
  parray: packed array[1..3,1..4] of integer;


  // Pointer:
  number1: Integer;
  number2: Integer;
  pnumber1 : ^Integer;
  pnumber2 : ^Integer;

const
  PI = 3.15;


function sum(num1:Integer; num2:Integer): Integer;
begin
  result := num1 + num2;
end;

procedure greeting(name:String);
begin
  Writeln('Hello, ' + name + '!');
end;

procedure showArray(var arr: TMatrix);
begin
   (* MATRIX *)
   {
   for x := 0 to 3 do
   begin
     for y := 0 to 4 do
     begin
       Writeln(matrix[x][y]);
     end;
   end;
   }
end;


begin







  id := 123;
  name := 'Anderson';
  salary := 4321.11;
  birthday := StrToDate('12/11/1981');
  gender := 'M';

  Writeln(DateToStr(birthday));

  color := Green;

  //writeln( 'Enter your marks(1 - 3): ');
  //readln(marks);

   saldo:=2000;

   (* hdgsahdgshgdsh dsh h*)
   if(saldo > 0) then
   begin
    Writeln('Positivo')
   end
   else if (saldo = 0) then
   begin
    Writeln('Zerado')
   end
   else
   begin
    Writeln('Negativo')
   end;


   opc := 'c';

   case (opc) of
      'a': writeln('Option 01');
      'b','c': writeln('Option 02');
      'd': writeln('Option 03');
   else
       writeln('Invalid option!')
   end;


   cont := 0;
   while(cont < 10) do
   begin
       Writeln(cont);
       cont := cont + 1;
   end;

   for cont := 0 to 10 do
   begin
       Writeln(cont);
   end;

   (* repeat ... until *)
   cont := 10;
   repeat
      Writeln(cont);
      cont := cont - 1;
   until cont = 0;

   (* BREAK *)
   i := 0;
   while(i < 10) do
   begin
      Writeln(i);
      i := i + 1;
      if(i = 5) then
      begin
          Writeln('FINISH.');
          break;
      end;
   end;

   (* CONTINUE *)
   i := 0;
   while(i < 10) do
   begin
      Writeln(i);
      i := i + 1;
      if(i = 5) then
      begin
          Writeln('X');
          i := i + 1;
          continue;
      end;
   end;

   (* GOTO *)
   i := 0;
   1: i := i + 1;
   while(i < 10) do
   begin
      Writeln(i);
      goto 1;
   end;


   Writeln(sum(10,3));
   
   greeting('Anderson');

   str1 := 'Hello, ';
   str2 := 'World!';
   appendstr( str1, str2);
   Writeln(str1);

   opt := false;

   if(opt) then
   begin
     Writeln('Option true.')
   end
   else
   begin
     Writeln('Option false.')
   end;


   (* ARRAY *)
   for cont := 0 to 10 do
   begin
     vetor[cont] := cont * 3;
   end;

   for cont := 0 to 10 do
   begin
     Writeln(vetor[cont]);
   end;

   (* MATRIX *)
   for x := 0 to 3 do
   begin
     for y := 0 to 4 do
     begin
       matrix[x][y] := x + y;
     end;
   end;

   for x := 0 to 3 do
   begin
     for y := 0 to 4 do
     begin
       Writeln(matrix[x][y]);
     end;
   end;

   (* DYNAMIC ARRAY *)
   SetLength(darray, 10);
   for cont := 0 to 10 do
   begin
     darray[cont] := cont * 3;
   end;

   for cont := 0 to 10 do
   begin
     Writeln(darray[cont]);
   end;

   (* PACKED ARRAY *)
   for x := 0 to 3 do
   begin
     for y := 0 to 4 do
     begin
       parray[x][y] := x + y;
     end;
   end;

   for x := 0 to 3 do
   begin
     for y := 0 to 4 do
     begin
       Writeln(parray[x][y]);
     end;
   end;

   (* Passando array para uma procedure: *)
   showArray(matrix);


   // Pointer:
   number1 := 10;
   number2 := 3;
   pnumber1 := @number1;
   pnumber2 := @number2;
   writeln(pnumber1^ + pnumber2^);


   read(c);
end.
