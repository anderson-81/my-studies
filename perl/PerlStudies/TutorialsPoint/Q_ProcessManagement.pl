#!C:\perl\perl\bin\perl.exe
#
# @File Q_ProcessManagement.pl
# @Author Anderson
# @Created Jul 26, 2018 6:45:46 PM
#

#Executing process "dir" on perl code.
sub Proc1 {
    @files = `dir`
    ;
    foreach $file (@files) {
        print $file;
    }
    1;
}
#Executing process "dir" on perl code.
sub Proc2 {
    $cmd = `perl -v`
    ;
    system($cmd)
}
sub Proc3 {
    my $path = "I'm Perl Variable.";
    system('echo $path');
    # Treats $PATH as shell variable
    system("echo $path");
    # Treats $PATH as Perl variable
    system("echo \$path");
    # Escaping $ works.
    1;
}
sub Proc4 {
    if(!defined($pid = fork())) {
        # fork returned undef, so unsuccessful
        die "Cannot fork a child: $!";
    }
    elsif ($pid == 0) {
        print "Printed by child process\n";
        exec("date") || die "can't exec date: $!";
    }
    else {
        # fork returned 0 nor undef
       # so this branch is parent
        print "Printed by parent process\n";
        $ret = waitpid($pid,0
        );
        print "Completed process id: $ret\n";
    }
    1;
}
sub Proc5 {
    local $SIG {
        CHLD
    }
    = "IGNORE";
    if(!defined($pid = fork())) {
        # fork returned undef, so unsuccessful
        die "Cannot fork a child: $!";
    }
    elsif ($pid == 0) {
        print "Printed by child process\n";
        exec("date") || die "can't exec date: $!";
    }
    else {
        # fork returned 0 nor undef
   # so this branch is parent
        print "Printed by parent process\n";
        $ret = waitpid($pid,0
        );
        print "Completed process id: $ret\n";
    }
    1;
}
sub Proc6 {
    kill('INT', 104, 102);
}
Proc6

