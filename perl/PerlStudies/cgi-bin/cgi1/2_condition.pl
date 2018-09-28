#!C:\perl\perl\bin\perl.exe


print "Content-type: text/html\n\n";

$age = 15;

if($age >= 18){
	$result = "Allowed.";
}elsif(($age > 0) && ($age < 18)){
	$result = "Not allowed.";
}else{
	$result = "Invalid.";
}

if($age eq 18){
	$reseq = "Eighteen.";
}else{
	$reseq = "Not eighteen.";
}

if($age ne 18){
	$resne = "Not Eighteen.";
}else{
	$resne = "Eighteen.";
}

$res = (($age > 18) || ($age == 18)) ? "Allowed." : "Not allowed.";   


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
		<h1>$age</h1>
		<h4>$result</h4>
		<h5>$reseq</h5>
		<h5>$resne</h5>
		<h5>$res</h5>
	</body>
</html>
INDEX
exit;