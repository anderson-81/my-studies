#!/usr/bin/perl
#
# @File F_Directories.pl
# @Author Anderson
# @Created Jul 24, 2018 3:15:52 AM
#

use strict;

# Get itens from directory.
sub GetItens{
    my @itens = glob("C:/*");
    foreach (@itens){
        print "\n".$_;
    }
}

# Get itens from directory with extension file.
sub GetItensExt{
    my @itens = glob("C:/*.sys");
    foreach (@itens){
        print "\n".$_;
    }
}

# Get itens from directory with extension file.
sub GetFileIntoDir{
    my $file = \0;
    opendir(DIR,"C:/Windows/") or die ("Error!");
    while($file = readdir DIR){
        print "\n".$file;
    }
    closedir DIR;
}

# Create directory.
sub CreateDir{
    RemoveDir();
    mkdir("TempDir") or die ("Error!");
}

# Remove directory.
sub RemoveDir{
    rmdir("TempDir") or die ("Error!");
}

# Change directory.
sub ChangeDir{
    CreateDir();
    my $dir = "TempDir";
    chdir($dir) or die ("Error!");
    print "Your new location is $dir.\n";
}


#GetItens();
#GetItensExt();
#GetFileIntoDir();
#CreateDir();
#RemoveDir();
#ChangeDir();




