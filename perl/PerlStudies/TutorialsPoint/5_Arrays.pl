#!/usr/bin/perl
#
# @File 5_Arrays.pl
# @Author Anderson
# @Created Jul 23, 2018 2:34:50 AM
#

use strict;

#Array
my @peoples = ("Anderson", "Maurina", "Adriana", "Michelle", "Marcia", "Joana");

#Get iten from Array:
print "@peoples[1]";

print "\n";

#foreach
my $person = "\b";
my $cont = 0;
foreach $person (@peoples){
    $cont++;
    print "\n$cont - $person";
}

print "\n";


#Get itens from for...
$cont = 0;
my $size = @peoples;
for($cont = 0; $cont < $size; $cont++){
    print "\n$cont - @peoples[$cont]";
}

#Array de varios tipos;
my @types = ("Anderson", 5432.11, 'M', 36);
my $item = "\b";
foreach $item (@types){
    print "\n".$item;
}


#Array with qw
my @week = qw/Monday Tuesday Wednesday Thursday Friday Saturday Sunday/;
my $day = "\b";
foreach $day (@week){
    print "\n".$day;
}

print "\n";

#Get item from indexes.
print "\n".@week[1];
print "\n".@week[0];
print "\n".@week[-1]; #Sunday
print "\n".@week[-7]; #Monday
print "\n";

#Ranger 
my @var_10 = (0..10);
print "\n";
print @var_10; 
my @var_Az = ('A'..'Z');
print "\n";
print "\L@var_Az";

print "\n";

#Array's Size:
my @var_33 = (1..33);
print scalar @var_33;
print "\n";
$var_33[50] = 34;
print scalar @var_33; #Size array.
print "\n";
print $#var_33; #Size max value.

#Operations with arrays.
my @clients = ("Anderson", "Maurina", "Adriana", "Michelle", "Marcia", "Joana");
print "\n";
print @clients;
print "\n";
push(@clients, "Jussara");
print @clients;
print "\n";
unshift(@clients, "Fernanda");
print @clients;
print "\n";
pop(@clients);
print @clients;
print "\n";
shift(@clients);
print @clients;

#Slicing:
my @slice1 = @clients[0,1,2];
my @slice2 = @clients[3..5];
print @slice1; #@client + itens (0,1,2);
print @slice2; #@client + itens (0,1,2);

print "\n";

#splice function
my @neg = (-9..-1);
my @pos = (1..9);
splice(@neg, @pos);
print @neg;

# transform above strings into arrays.
my $employees1 = "Anderson-Maurina-Adriana-Michelle-Marcia-Joana";
my $employees2 = "Anderson,Maurina,Adriana,Michelle,Marcia,Joana";
print join(',', split('-', $employees1));
print "\n";
print join('-', split(',', $employees2));
print "\n";

#Sort Array:
print sort(@peoples);

print "\n";

#Get first index
print $[=1;

print "\n";

#Merging Arrays:
my @numbers = (0,1,(2,3,4),5,(6),7..9);
print @numbers;

print "\n";

#Selecting Elements from Lists
my $sel1 = @numbers[4];
my $sel2 = @numbers[1..3];
print $sel1;
print "\n";
print $sel2;