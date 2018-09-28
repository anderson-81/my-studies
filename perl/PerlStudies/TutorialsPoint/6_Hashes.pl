#!/usr/bin/perl
#
# @File 6_Hashes.pl
# @Author Anderson
# @Created Jul 23, 2018 3:47:36 AM
#

use strict;

my %colors1 = (1,"Yellow",2,"Green",3,"Blue",4,"White",5,"Red");
my %colors2 = (1 => "Yellow", 2 => "Green", 3 => "Blue", 4 => "White", 5 => "Red");

print "\n".%colors1{4};
print "\n".%colors2{5};
print "\n".%colors2{-5};

#Slicing:
print @colors1{2,3,4}; #Slice should be done as an array of items.

#Get keys;
my @Keys = keys %colors1;
my @Values = values %colors1;
print "\n";
print @Keys;
print "\n";
print @Values;

#if exists:
my $idx = 8;
if(exists($colors1{$idx})){
    print "\nExists!";
}else{
    print "\nNot found.";
}

#Hash's size:
print "\n";
my $size_hash = %colors2;
print $size_hash;

#adding elements:
print "\n";
$colors2{7} = "Golden";
print %colors2;

#deleting elements:
print "\n";
delete $colors2{7};
print %colors2;