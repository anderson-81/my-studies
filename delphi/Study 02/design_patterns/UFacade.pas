unit UFacade;

interface

uses
  SysUtils, UFactory;

type
  TFacade = class
  private
    class function NewInstance: TObject; override;
  public
    class function getInstance: TFacade;
    procedure Insert_PhysicalPerson(id:integer; name:string; birthday:TDateTime; gender:char);
  end;

var
  instance: TFacade;

implementation

{ SINGLETON }
class function TFacade.NewInstance: TObject;
begin
  if not Assigned(instance) then
  begin
    instance := TFacade(inherited NewInstance);
  end;
  result := instance;
end;
 
class function TFacade.getInstance: TFacade;
begin
  result := TFacade.Create;
end;
{ SINGLETON }

{ METHODS }
procedure TFacade.Insert_PhysicalPerson(id:integer; name:string; birthday:TDateTime; gender:char);
var
  factory : TFactory;
  pp : TPhysicalPerson;
begin
  writeln('FACADE:');
  pp := factory.CreatePhysicalPerson(id, name, birthday, gender);
  writeln(pp.toString);
end;

end.
