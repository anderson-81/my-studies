#!/usr/bin/perl
#
# @File B_Subroutines.pl
# @Author Anderson
# @Created Jul 23, 2018 7:27:00 PM
#

use strict;


sub Function1{
    sub PrintValues{
        #my $size = @_; 
        my $size = scalar(@_); #private variable. 
        print "\nQuantity = $size";

        print "\n";
        my $item = \0;
        foreach $item (@_){
            print "\n - $item";
        }
    }
    my @array = (20,40,60,80,100);
    PrintValues(20,"Anderson",'M',5432.11,3.2,@array);
}

sub Function2{
    sub PrintValues{
       my (%hash) = @_; 
       foreach my $key (keys %hash){
           print "\n$key";
       }
    }
    my %hash = ("Yellow" => 10, "Blue" => 20, "Green" => 30, "White" => 40, "Red" => 50);
    PrintValues(%hash);
}

sub Function3{
    sub Increment{
        my $sum = 0;
        my $num = 0;
        foreach $num (@_){
            $sum = $sum + $num;
        }
        return $sum;
    }
    my $ret = Increment(50,40,-89,-43,7);
    print $ret; 
}


# STATE
use feature 'state';
sub Function4(){
    sub Increment{
        state $cont = 0; #static value
        $cont++;
        print "\n".$cont;
    }
    
    for(1..5){
        Increment();
    }
}

# LOCALTIME FUNCTION
sub Function5(){
    sub PrintDate{
        my ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime(time);
        printf("\n%-$mon-$mday $hour:$min:$sec");
    }
    PrintDate();
}

#Function1();
#Function2();
#Function3();
#Function4();
#Function5();


