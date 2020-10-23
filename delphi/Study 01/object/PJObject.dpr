program PJObject;

{$APPTYPE CONSOLE}

uses
  SysUtils;

type
  Rectangle1 = object
    private
      width: integer;
      height: integer;
    protected
      procedure setWidth(w:integer);
      procedure setHeight(h:integer);
      procedure showRectangle;
  end;

  (* Inheritance *)
  Rectangle2 = object(Rectangle1)
  end;

var
  c: char;

procedure Rectangle1.setWidth(w:integer);
begin
   width := w;
end;

procedure Rectangle1.setHeight(h:integer);
begin
   height := h;
end;

procedure Rectangle1.showRectangle;
begin
  writeln(IntToStr(width) + 'px, ' + IntToStr(height) + 'px');
end;

(* Intanciando *)
procedure ProcInstRectangle;
var
  r: Rectangle1;
begin
  r.setWidth(100);
  r.setHeight(200);
  r.showRectangle;
end;

(* Ponteiro *)
procedure ProcPointerRectangle;
var
  r: Rectangle1;
  p: ^Rectangle1;
begin
  p := @r;
  p^.setWidth(300);
  p^.setHeight(400);
  p^.showRectangle;
end;

(* Intanciando herança *)
procedure ProcInhRectangle;
var
  r2: Rectangle2;
begin
  r2.setWidth(640);
  r2.setHeight(480);
  r2.showRectangle;
end;

begin
  ProcInstRectangle;
  ProcPointerRectangle;
  ProcInhRectangle;
  read(c);
end.
