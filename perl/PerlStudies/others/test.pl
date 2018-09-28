#!C:\perl\perl\bin\perl.exe
use strict;
use warnings;

print "Your name, please: ";
my $name = <STDIN>;
chomp $name; #without breakline;

if (-t STDIN) { print "Hello, $name!"; } else {  die "Name is empty.\n"}

my $age = <STDIN>;
chomp $age; #without breakline;

if(<STDIN> eq ""){
	print "Your age is, $name!";
}else{
	print "Name is empty.";
}


