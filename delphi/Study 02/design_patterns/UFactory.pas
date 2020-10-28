unit UFactory;

interface

uses SysUtils;

type
  TPerson = class
  private
    id: Integer;
    name: String;
  public
    Constructor create(id:integer; name:string);
  end;

  TPhysicalPerson = class(TPerson)
  private
    birthday: TDateTime ;
    gender: Char;
  public
    Constructor create(id:integer; name:string; birthday:TDateTime; gender:char);
    function toString:string;
  end;

  TFactory = class
  private
  public
    function CreatePhysicalPerson(id:integer; name:string; birthday:TDateTime; gender:char) : TPhysicalPerson;
  end;

implementation

Constructor TPerson.create(id:integer; name:string);
begin
  self.id := id;
  self.name := name;
end;

Constructor TPhysicalPerson.create(id:integer; name:string; birthday:TDateTime; gender:char);
begin
  Inherited Create(id, name);
  self.birthday := birthday;
  self.gender := gender;
end;


Function TPhysicalPerson.toString:String;
begin
  result := IntToStr(self.Id) + ' - ' + self.name + ' - ' + DateToStr(self.birthday) + ' - ' + self.gender;
end;

{ FACTORY }

Function TFactory.CreatePhysicalPerson(id:integer; name:string; birthday:TDateTime; gender:char) : TPhysicalPerson;
begin
  result := TPhysicalPerson.Create(id, name, birthday, gender);
end;

{ FACTORY }

end.
