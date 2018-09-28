#!/usr/bin/perl
#
# @File I_CodingStandard.pl
# @Author Anderson
# @Created Jul 24, 2018 4:25:16 PM
#

use strict;

my $result = 4 > 3;

sub Function1{
   print "True expression.\n" if $result; 
}

sub Function2{
   $result && print "True expression.\n";
}

# Pesquisar mais sobre o assunto.

print $PERL_VERSION;