#!C:\perl\perl\bin\perl.exe

package P_FunctionsModules;

sub Greeting{
    print "Hello, $_[0]!";
}

sub Sum{
    return $_[0] + $_[1];
}
1;

#Sharing modules:

#h2xs -AX -n FunctionsModules 
