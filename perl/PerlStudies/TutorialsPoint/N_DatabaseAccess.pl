#!/usr/bin/perl
#
# @File N_DatabaseAccess.pl
# @Author Anderson
# @Created Jul 24, 2018 7:29:31 PM
#

use DBI;
use strict;

#Connect to database:
sub Connect{
    my $driver = "mysql"; 
    my $database = "dbPerl";
    my $dsn = "DBI:$driver:database=$database";
    my $userid = "root";
    my $password = "";
    #Autocommit disabled;
    my $dbh = DBI->connect($dsn, $userid, $password,{RaiseError => 1, AutoCommit => 0}) or die $DBI::errstr;
    return $dbh; 
}

sub InsertData{
    my $conn = Connect();
    my $str = 'INSERT INTO PERSON VALUES (1, \'Anderson\');';
    my $cmd = $conn->prepare($str);
    $cmd->execute() or die $DBI::errstr;
    $cmd->finish();
    $conn->commit or die $DBI::errstr; #AutoCommit disabled.
}

sub InsertDataNull{
    my $conn = Connect();
    my $str = 'INSERT INTO PERSON VALUES (?,?);';
    my $cmd = $conn->prepare($str);
    my $rc  = $conn->begin_work or die $conn->errstr;
    $cmd->execute(3,undef) or die $DBI::errstr;
    $cmd->finish();
    $conn->commit or die $DBI::errstr; #AutoCommit disabled.
    my $rc = $conn->disconnect or warn $conn->errstr;
}

sub EditData{
    my $conn = Connect();
    my $str = 'UPDATE PERSON SET NAME = ? WHERE ID = ?;';
    my $cmd = $conn->prepare($str);
    #with values's vinculation.
    $cmd->execute('Maurina',1) or die $DBI::errstr;
    $cmd->finish();
    $conn->commit or die $DBI::errstr; #AutoCommit disabled.
}


sub DeleteData{
    my $conn = Connect();
    my $str = 'DELETE FROM PERSON WHERE ID = ?;';
    my $cmd = $conn->prepare($str);
    my $rc  = $conn->begin_work or die $conn->errstr;
    $cmd->execute(1) or die $DBI::errstr;
    $cmd->finish();
    $conn->commit or die $DBI::errstr; #AutoCommit disabled.
    my $rc = $conn->disconnect or warn $conn->errstr;
}

sub GetPersonByID{
    my $dbh = Connect();
    my $sth = $dbh->prepare('SELECT ID, NAME
                        FROM PERSON 
                        WHERE ID = 1');
    $sth->execute() or die $DBI::errstr;
    print 'Number of rows found :'.$sth->rows;
    
    while (my @row = $sth->fetchrow_array()) {
       my ($id, $name) = @row;
       print $id.' - '.$name;
    }
    $sth->finish();
    #Disconnect:
    my $rc = $dbh->disconnect or warn $dbh->errstr;
}

sub GetPersonByName{
    my $dbh = Connect();
    my $sth = $dbh->prepare('SELECT ID, NAME
                        FROM PERSON 
                        WHERE NAME LIKE ?');
    $sth->execute('A%') or die $DBI::errstr;
    print 'Number of rows found :'.$sth->rows;
    
    while (my @row = $sth->fetchrow_array()) {
       my ($id, $name) = @row;
       print $id.' - '.$name;
    }
    $sth->finish();
    #Disconnect:
    my $rc = $dbh->disconnect or warn $dbh->errstr;
}

sub GetDrivers{
    foreach(DBI->available_drivers){
        print;
    } 
    foreach(DBI->available_drivers('mysql')){
        print;
    } 
    
    my %drivers = DBI->installed_drivers();
    print %drivers;
    
    print DBI->data_sources('mysql');
    
}

InsertData();
#EditData();
#DeleteData();
#GetPersonByID();
#GetPersonByName();
#InsertDataNull();

GetDrivers();


