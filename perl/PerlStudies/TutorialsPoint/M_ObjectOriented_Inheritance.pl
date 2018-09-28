#!/usr/bin/perl
#
# @File M_ObjectOriented_Inheritance.pl
# @Author Anderson
# @Created Jul 24, 2018 6:52:56 PM
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

sub setName{
   my ( $self, $name ) = @_;
   $self->{_lastName} = $name if defined($name);
   return $self->{_name};
}
sub getName {
   my( $self ) = @_;
   return $self->{_name};
}

1;


#Inheritance
package PhysicalPerson;
our @ISA = qw(Person);  # inherits from Person
sub DESTROY {
   print "\n\n\nMySubClass::DESTROY called\n";
}
sub MyMethod {
   my $self = shift;
   $self->SUPER::setName("Anderson");
   print "\n\n\nMySubClass::setName called!\n";
}

#Creating object;
my $pp = new PhysicalPerson(321, "Maurina", 7777.77, "08/06/1954", 'F');
$pp->MyMethod();
print "\nName = ".$pp->getName();