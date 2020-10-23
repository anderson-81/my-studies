update person set 
	name = 'Anderson', 
	email = 'anderson@email.com', 
	salary = 5432, 
	birthday = to_date('01/01/1985', 'DD/MM/YYYY'),
	gender = 'M'  
where id = 1;

select * from person;