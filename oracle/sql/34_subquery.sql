-- Selecionando as pessoas cadastrada na UF = 'RJ':

select person.name from person 
inner join city 
on person.city_id = city.id 
where city.state_id = (
	select id from state where uf = 'RJ'
);