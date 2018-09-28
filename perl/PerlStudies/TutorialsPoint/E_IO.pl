#!/usr/bin/perl
#
# @File D_IO.pl
# @Author Anderson
# @Created Jul 24, 2018 2:49:45 AM
#

use strict;
use warnings; 

sub CreateFile{
    #Delete "lorem.txt"
    unlink("lorem.txt");
    
    #Data
    my $str = "
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
    id est laborum.";
    
    #Open file for write.
    open(FH, '>', "lorem.txt") or die ("Error!");
    
    #Print to write.
    print FH $str;
    
    #Close file.
    close(FH);
}

sub ReadFile{
    #Open file to read.
    open(DATA, "<lorem.txt") || die ("Error!");
    
    #Get caracteres from file.
    while(<DATA>){
        print "$_";
    }
}

CreateFile();
ReadFile();
