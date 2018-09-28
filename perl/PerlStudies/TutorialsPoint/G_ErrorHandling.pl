#!/usr/bin/perl
#
# @File G_ErrorHandling.pl
# @Author Anderson
# @Created Jul 24, 2018 3:42:04 AM
#

use strict;


sub GetError1{
    if(chdir("TempDir")){
    }else {
        die "Error: Can't change directory.";
    }
}

sub GetError2{
    unless(chdir("DirUnless")){
        die "Error: Can't change directory.";
    }
}

sub GetError3{
    die "Error: Can't change directory." or die unless(chdir("DirUnless"));
}

sub GetError4{
    my %hash = (1 => "Green", 2 => "Yellow",  3 => "Blue", 4 => "White");
    my $ret = exists($hash{4})?"Exists!":"Not found.";
    print $ret;
}

sub GetError5{
    chdir('/etc') or warn "Can't change directory";
}

sub GetError6{
    chdir('/etc') or die "Can't change directory";
}

#Como trabalhar com erros nos módulos?

