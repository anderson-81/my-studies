#!C:\perl\perl\bin\perl.exe
#
# @File P_PackagesAndModules.pl
# @Author Anderson
# @Created Jul 26, 2018 3:14:51 PM
#


#Splitting the code into packages.

#main package
$name = "Anderson";
print "\n".__PACKAGE__."  - Name = $name";

#Pack1 package
package Pack1;
$name = "Maurina";
print "\n".__PACKAGE__." - Name = $name";

#main package
package main;
print "\n".__PACKAGE__."  - Name = $name";
1;


#Splitting the code (BEGIN and END).
package BlockTest;

sub TestPack2{
    BEGIN{
        print "Begin block.\n";
    }
    END{
        print "\nEnd block.\n";
    }
    1;
}


#Calling functions on module on other file (*.pm).
package main;

require FunctionsModules;
FunctionsModules::Greeting("Anderson");
print "\n".FunctionsModules::Sum(30,6);

#Calling functions on modules on other file (*.pm).
package FunctionsModules;
print "\n";
Greeting("Maurina"); 


#Export on details.
package Module;
require Exporter;
@ISA = qw(Exporter);
@EXPORT = qw(bar blat);
sub bar { print "Hello $_[0]\n" }
sub blat { print "World $_[0]\n" }
sub splat { print "Not $_[0]\n" }  # Not exported!
1;

package Module;
bar("Anderson");