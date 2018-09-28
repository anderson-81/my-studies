#!/usr/bin/perl
#
# @File 4_Scalars.pl
# @Author Anderson
# @Created Jul 23, 2018 2:21:54 AM
#

use strict;

my $str = "Hello".", Anderson!";
print "$str";
print "\n";
my $number = 5423;
my $concat = $str.$number;
print $concat;
print "\n";


#Automaticamente o perl faz a quebra de linha.
my $text = "Lorem ipsum dolor sit amet, 
consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut 
labore et dolore magna aliqua.";
print "$text";

print "\n";
print "\n";

#print com EOF
print <<EOF;
Lorem ipsum dolor sit amet, 
consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut 
labore et dolore magna aliqua.
EOF

print "\n";

#Generating words with character codes.
my $name_char = v65.110.100.101.114.115.111.110;
print "$name_char";

#Special literals;
print "File = ".__FILE__;
print "\n";
print "Package = ".__PACKAGE__;
print "\n";
print "Current line number = ".__LINE__;
