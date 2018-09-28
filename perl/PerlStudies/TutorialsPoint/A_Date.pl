#!/usr/bin/perl
#
# @File A_Date.pl
# @Author Anderson
# @Created Jul 23, 2018 4:42:35 AM
#

use strict;

my @m = qw/Janeiro Fevereiro Março Abril Maio Junho Julho Agosto Setembro Outubro Novembro Dezembro/;
my @w = qw/Domingo Segunda-Feira Terça-Feira Quarta-Feira Quinta-Feira Sexta-Feira Sabado/;

#LOCALTIME
my $date = localtime();
print "localtime = $date";

print "\n";

my ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime();
print "$w[$wday], $mday de $m[$mon+1].";
print "\n$isdst";


#GMT

my $gmt = gmtime();
print "\nGMT = $gmt";

my ($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = gmtime();
printf("\n%02d-%02d-%02d - %02d:%02d:%02d", $year, $mon, $mday, $hour, $min, $sec);

#TIME
my $time = time();
print "\nTIME = $time";
print "\n";
my $time = $time - 24 * 60 * 60;
my $datestring = localtime($time);
print $datestring; 

print "\n";

# POSIX

#!/usr/local/bin/perl
use POSIX qw(strftime);

my $dat1 = strftime "%Y-%m-%d", localtime;
printf("date and time - $dat1\n");

# or for GMT formatted appropriately for your locale:
my $dat2 = strftime "%Y-%m-%d %H:%M:%S", gmtime;
printf("date and time - $dat2\n");