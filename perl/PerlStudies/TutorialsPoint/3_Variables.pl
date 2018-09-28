#!/usr/bin/perl
#
# @File 3_Variables.pl
# @Author Anderson
# @Created Jul 22, 2018 6:55:19 PM
#

use strict;

#Variables:
my $name = "Anderson";
my $age = 36;
my $salary = 3.321;
my $gender = 'M';


#Arrays:
my @peoples = ("Anderson", "Maurina", "Adriana", "Michelle", "Marcia", "Joana");
print "$peoples[1]";

print "\n";

#Hashs:
my %colors = ("Green", 1, 2,"Yellow", "Blue", 3, "White", 4, "Red", 5);
print "$colors{\"Green\"}";
print "\n";
print "$colors{2}";

print "\n";


#Get size form collections:
my $size1 = @peoples;
print "Array\'s size = $size1";
print "\n";
my $size2 = %colors;
print "Hash\'s size = $size2";


#Copy
my $copy_variable = $name;
my @copy_peoples = @peoples;
my %copy_colors = %colors;
print "\n$copy_variable";
print "\n@copy_peoples";
print "\n%copy_colors";
