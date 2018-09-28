#!/usr/bin/perl
#
# @File L_Socket.pl
# @Author Anderson
# @Created Jul 24, 2018 5:09:46 PM
#

use strict;

use IO::Socket;

my $socket = IO::Socket::INET->new(
    Proto => "tcp",
    PeerAddr => "spring-blog.herokuapp.com",
    PeerPort => 80
);

$socket->autoflush(1);

print $socket "get /show/29";