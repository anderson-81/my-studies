#!/usr/bin/perl
#
# @File C_References.pl
# @Author Anderson
# @Created Jul 23, 2018 8:34:48 PM
#

use strict;

my $arrayref = [0,1,2,3,[4,5,6],7,[8,9]];

my $hashref = {
    10 => "Anderson",
    20 => "Maurina",
    30 => "Adriana",
    40 => "Michelle",
    50 => "Fernanda",
    60 => "Luiza"
};

my $functionref = sub{ print "Hello, World!";};

print "\n".$arrayref;
print "\n".$hashref;
print "\n".$functionref;

#Dereferencing
my $var1 = 36;
my $ref1 = \$var1;
print "\n".$ref1;

my @var2 = (1981,11,12,10,30);
my $ref2 = \@var2;
print "\n".$ref2;

my %var3 = {
    10 => "Anderson",
    20 => "Maurina",
    30 => "Adriana",
    40 => "Michelle",
    50 => "Fernanda",
    60 => "Luiza"
};
my $ref3 = \%var3;
print "\n".$ref3;

print "\n".ref($ref1);
print "\n".ref($ref2);
print "\n".ref($ref3);
print "\n".$$ref1;

#Function's references
sub Greeting{
    my $name = scalar(@_);
    print "\nHello, $name!";
}

my $fct = \&Greeting;
&$fct("Anderson");