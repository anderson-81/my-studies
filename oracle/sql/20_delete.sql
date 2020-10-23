-- Excluindo where:
delete from person where id = 1;
select * from person;

-- Excluindo o com IN:
delete from person where id in (2,5); -- foram excluído os registros 2 e 5.
select * from person;

-- Excluindo o com IN:
delete from person where id between 2 and 4; -- foram excluído entre 2 e 4.
select * from person;

-- Excluindo todos os registros:
delete from person; 
select * from person;
