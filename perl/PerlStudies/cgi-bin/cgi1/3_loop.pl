#!C:\perl\perl\bin\perl.exe


print "Content-type: text/html\n\n";

$result = \0;

for($i = 0; $i < 1000; $i++){
	if($i == 10){
		break;
		$result = "Finished.";
	}
}


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
		<h1>$result</h1>
	</body>
</html>
INDEX
exit;