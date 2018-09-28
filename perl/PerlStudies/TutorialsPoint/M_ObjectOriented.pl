#!/usr/bin/perl
#
# @File M_ObjectOriented.pl
# @Author Anderson
# @Created Jul 24, 2018 6:07:00 PM
#

use strict;

#Person class:
package Person;
sub new{
    my $class = shift;
    
    #Attributes
    my $self = {
        _id => shift,
        _name => shift,
        _salary => shift,
        _birthday => shift,
        _gender => shift
    };

    #Print 
    print "\nID: $self->{_id}";
    print "\nName: $self->{_name}";
    print "\nSalary: $self->{_salary}";
    print "\nBirthday: $self->{_birthday}";
    print "\nGender: $self->{_gender}";
    print "\n";
    
    bless $self, $class;
    return $self;
}

sub CreateObject1{
    
    #Creating birthday's value.
    use POSIX qw(strftime);
    my $birthday = strftime "%Y-%m-%d", localtime;
    
    #Creating object;
    my $p = new Person(123, "Anderson", 5211.11, $birthday, 'M');
    
    #Get value from object:
    print "$p->{_name}";
}


#Client class:
package Client;
sub new{
    my $class = shift;
    my $self = {
        id => shift,
        name => shift
    };
    bless $self, $class;
    return $self;
}

sub CreateObject2{
    my $cli = new Client(1, "Anderson");
    print "\n$cli->{id} - $cli->{name}";
}

package Person; #Preciso apontar o package.
CreateObject1();

package Client;  #Preciso apontar o package.
CreateObject2();


package Calculator;
sub new{
    my $class = shift;
    my $self = {
      num1 => shift,
      num2 => shift
    };
    bless $self, $class;
    return $self;
}

sub Sum{
    my ($self, $num1, $num2) = @_;           #Get current object and values to function.
    $self->{num1} = $num1 if defined($num1); #Set value if defined;
    $self->{num2} = $num2 if defined($num2); #Set value if defined;
    return $self->{num1} + $self->{num2};    #Calculate;
}

sub Sub{
    my ($self, $num1, $num2) = @_; 
    $self->{num1} = $num1 if defined($num1); 
    $self->{num2} = $num2 if defined($num2);
    return $self->{num1} - $self->{num2}; 
}

sub Mlt{
    my ($self, $num1, $num2) = @_;
    $self->{num1} = $num1 if defined($num1);
    $self->{num2} = $num2 if defined($num2);
    return $self->{num1} * $self->{num2};
}

sub Div{
    my ($self, $num1, $num2) = @_;
    $self->{num1} = $num1 if defined($num1);
    $self->{num2} = $num2 if defined($num2);
    return $self->{num1} / $self->{num2};
}

sub Mod{
    my ($self, $num1, $num2) = @_;
    $self->{num1} = $num1 if defined($num1);
    $self->{num2} = $num2 if defined($num2);
    return $self->{num1} % $self->{num2};
}

sub TestCalculator{
    my $obj = new Calculator(6,30);
    print "\n\n\nCALCULATOR:\n";
    print "\nSum = ".$obj->Sum();
    print "\nSub = ".$obj->Sub(10,3); #Change values to num1 e num2;
    print "\nMlt = ".$obj->Mlt();
    print "\nDiv = ".$obj->Div();
    print "\nMod = ".$obj->Mod(); 
}

TestCalculator();




    
    






