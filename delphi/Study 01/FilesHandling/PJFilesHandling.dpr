program PJFilesHandling;

{$APPTYPE CONSOLE}

uses
  SysUtils;

type
  TIFile = file of integer;
  TTFile = text;

var
  c: char;
  f: TIFile;
  myfile: File;



procedure CreateFileInteger;
var
  // Variável arquivo.
  f:TIFile;
  number:integer;
begin
  number := 13;
  // Atribuindo um arquivo para uma variável;
  Assign(f, 'files/ifile.bin');

  // Reescrevendo (ou criando) arquivo.
  Rewrite(f);

  // Escrevendo no arquivo.
  Write(f, number);

  // Fechando arquivo.
  Close(f);
end;

procedure ReadFileInteger;
var
  f:TIFile;
  number:integer;
begin
  // Atribuindo um arquivo para uma variável;
  assign(f,'files/ifile.bin');

  // resetar o arquivo:
  reset(f);

  // Enquanto nao chegar no final do arquivo:
  while not eof(f) do
  begin

    // Ler cada inteiro do arquivo e atribuir a uma variável:
    read(f, number);

    writeln(number);
  end;
  close(f);
end;

procedure CreateFile(var f:File);  // var => Passando a referencia do arquivo;
var
  n,i : integer;
begin
  n := 777;
  i := 1;
  Rewrite(f, sizeof(n));
  BlockWrite(f,i,n);
  close(f);
end;

{
procedure ReadFile(var f:File);  // var => Passando a referencia do arquivo;
var
  r: integer;
  buffer: Array [1..2048] of integer;
begin
  reset(f);
  while not eof(f) do
  begin
    BlockRead(f, buffer, sizeof(buffer), r);
  end;
  writeln(r);
  close(f);
end;
}

procedure WriteTextFile;
var
  f: text;
  s: string;
begin
  s := 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in laoreet' +
  'justo, ac accumsan erat. Vestibulum pellentesque ultricies mattis.';
  assign(f, 'files/lorem.txt');
  rewrite(f);
  writeln(f, s);
  close(f);
end;

procedure ReadTextFile;
var
  f: text;
  s: string;
begin
  assign(f, 'files/lorem.txt');
  reset(f);
  while not eof(f) do
  begin
    read(f, s);
    write(s);
  end;
  writeln(f, s);
  close(f);
end;


begin
  CreateFileInteger;
  ReadFileInteger;

  assign(myfile,'files/file.bin');
  CreateFile(myfile);
  // ReadFile(myfile);

  WriteTextFile;
  ReadTextFile;


  read(c);

end.
