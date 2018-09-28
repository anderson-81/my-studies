#!/usr/bin/perl
#
# @File 8_Loop.pl
# @Author Anderson
# @Created Jul 23, 2018 4:13:02 AM
#

use strict;
sub Forever {
    for(;;
    ) {
        print "Hello, World";
    }
}
sub Testfor {
    my $cont = 0;

    for(;
    $cont<10;
    $cont++) {
        print "\n".$cont;
    }
}
print "\n";
sub TestWhile {
    my $cont = 0;

    while($cont < 10) {
        print "\n".$cont;
        $cont++;
    }
}
print "\n";
sub TestDoWhile {
    my $cont = 0;
    do {
        print "\n".$cont;
        $cont++;
    }
    while($cont < 10);
}
sub WhileLabel() {
    my $x = 0;
    my $y = 0;
    OUTER: while($x < 3) {
        INNER: while($y < 4) {
            print "\n[$x, $y]";
            $y++;
        }
        $y = 0;
        $x++;
    }
}

print "\n";
sub TestUntil(){
    my $cont = 5;
    #Execution with false condition.
    until($cont > 10) {
        print "\n".$cont;
        $cont = $cont + 1;
    }
}

#TestUntil();

sub WhileNext() {
    my $x = 0;
    my $y = 0;
    OUTER: while($x < 3) {
        INNER: while($y < 4) {
            if($y == 2){
                $y = 4;
                next OUTER;
            }
            print "\n[$x, $y]";
        }
        $y = 0;
        $x++;
    }
}

WhileNext();
