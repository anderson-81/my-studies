unit Unit5;

interface

uses
  SysUtils;

type
  TMyStatic = class(TObject)
    public
      class procedure Greeting(name:String);
  end;

implementation

class procedure TMyStatic.Greeting(name:String);
begin
  Writeln('Hello, ' + name + '!');
end;

end.
 