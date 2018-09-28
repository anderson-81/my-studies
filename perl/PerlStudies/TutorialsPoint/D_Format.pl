#!/usr/bin/perl
#
# @File D_Format.pl
# @Author Anderson
# @Created Jul 23, 2018 9:48:34 PM
#

#Head
format EMPLOYEE_TOP =
===================================
Name                    Age
===================================
.

#Body
format EMPLOYEE =
===================================
@<<<<<<<<<<<<<<<<<<<<<< @<< 
$name 
@#
$age
@#####.##
$salary
===================================
.
select(STDOUT);


#Footer
format EMPLOYEE_BOTTOM =
End of Page @<
            $%
.


$^ = EMPLOYEE_TOP;
$~ = EMPLOYEE;




my @peo = ("Anderson", "Maurina", "Adriana", "Fernanda", "Michelle", "Marcia");
my @sal = (3232.11, 5432.11, 2311.11, 1121.33, 2521.11, 1980.11);
my @ags = (36, 64, 43, 30, 31, 43);

my $i = 0;
foreach (@peo){
    $name =  $_;
    $salary = $sal[$i];
    $age = $ags[$i];
    $i++;
    write;
}

