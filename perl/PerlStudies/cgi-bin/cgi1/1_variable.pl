#!C:\perl\perl\bin\perl.exe


print "Content-type: text/html\n\n";
$hour = localtime;
$name = "Anderson";
$num1 = 30;
$num2 = 06;
$summ = $num1+$num2;
$vflt = 3.12;
$vchr = 'M';
$vflt = 3.12;
@varr = ("Anderson", 36, 4.111, 'M');
%vhsh = (1 => "Green", 2 => "Yellow", 3 => "Blue", 4 => "White", 5 => "Red");



print << "INDEX";
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>PerlTest</title>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<link href="https://cdn.freebiesupply.com/logos/large/2x/perl-programming-language-logo-png-transparent.png" rel="shortcut icon">
	</head>
	<body>
		<h1>Hello, $name!</h1>
		<h3>$hour</h3>
		<h4>$summ</h4>
		<h4>$vflt</h4>
		<h4>$vchr</h4>
		<h4>$varr[0]</h4>
		<h4>$vhsh{4}</h4>
	</body>
</html>
INDEX
exit;