unit USingleton;

interface

type
  TSingletonClass = class
  private
    class function NewInstance: TObject; override;
  public
    class function getInstance: TSingletonClass;
    procedure ShowMessage(message: string);
  end;

var
  instance: TSingletonClass;

implementation

{ SINGLETON }
class function TSingletonClass.NewInstance: TObject;
begin
  if not Assigned(instance) then
  begin
    instance := TSingletonClass(inherited NewInstance);
  end;
  result := instance;
end;
 
class function TSingletonClass.getInstance: TSingletonClass;
begin
  result := TSingletonClass.Create;
end;
{ SINGLETON }

{ METHODS }
procedure TSingletonClass.ShowMessage(message: string);
begin
  writeln('SINGLETON:');
  write(message);
end;

end.
