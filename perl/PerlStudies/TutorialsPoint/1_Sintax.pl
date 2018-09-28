#!/usr/bin/perl
#
# @File 1_Sintax.pl
# @Author Anderson
# @Created Jul 22, 2018 6:26:57 PM
#

use strict;

# Comment
print "Hello, World!";
print "\n";
print ("Hello, World!");

#Block comment:
=begin comment
This a block 
comment in perl.
=cut

print "\n";

# "Hello, World!" with break line.
print "Hello
World";

print "\n";

#Variable 
my $name = "Anderson";
print "Hello, $name!";

print "\n";


#EOF
my $lorem = <<EOF;
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
EOF
print "$lorem";

# $ "
print "\"Testing\"";

print "\n";

print "\$result\n";


