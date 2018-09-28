#!/usr/bin/perl
#
# @File J_RegularExpression.pl
# @Author Anderson
# @Created Jul 24, 2018 4:47:22 PM
#

use strict;


sub RegExpr1{
  my $msg = "Hello, World!";

  if($msg =~ /World/){
      print "\nMatch.";
  }else{
      print "\nNot match.";
  }  
}

sub RegExpr2{
  my $msg = "World!";

  if($msg =~ /World/){
      print "\nMatch.";
  }else{
      print "\nNot match.";
  }  
}

sub RegExpr3{
  my $msg = "Hello, World!";

  if($msg =~ m[World]){
      print "\nMatch.";
  }else{
      print "\nNot match.";
  }  
}

sub RegExpr3{
  my $msg = "Hello, World!";

  if($msg =~ m{World}){
      print "\nMatch.";
  }else{
      print "\nNot match.";
  }  
}

sub RegExpr4{
  my $msg = "Hello, World!";

  if($msg =~ m/World/){
      print "\nMatch.";
  }else{
      print "\nNot match.";
  }  
}


# Estudar expressão regular a parte.