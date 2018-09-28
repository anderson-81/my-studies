#!/usr/bin/perl
#
# @File H_SpecialVariables.pl
# @Author Anderson
# @Created Jul 24, 2018 4:25:14 AM
#

use strict;


sub Variable1{
    foreach(0,20,40,60,80){
        print "\n".$_;
    }
}

sub Variable2{
    foreach(0,20,40,60,80){
        print;
        print "\n";
    }
}

sub Variable3{
    foreach(0,20,40,60,80){
        print;
        print "\n";
    }
}

sub Variable4{
    print "\n".__FILE__;
    print "\n".__LINE__;
    print "\n".__PACKAGE__;
}

sub Variable5{
    print "\n".$|;
    print "\n".$%;
    print "\n".$=;
    print "\n".$-;
    print "\n".$~;
    print "\n".$^;
}

#Pesquisar mais sobre o assunto?