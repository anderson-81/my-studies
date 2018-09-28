#!/usr/bin/perl
#
# @File 7_Conditional.pl
# @Author Anderson
# @Created Jul 23, 2018 4:07:42 AM
#

use strict;

my $age = 18;
if($age >= 18){
    print "Allowed.";
}elsif ($age < 18 && $age >= 0){
    print "Not allowed.";
}else{
    print "Invalid!";
}

print "\n";

my $res_tern = ($age >= 18)?"Allowed":"Not allowed.";
print $res_tern; 
