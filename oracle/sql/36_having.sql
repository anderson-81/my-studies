-- Having: 
-- Colocar uma clausula a mais no select.

-- Mostrar nome dos estados que possuem quantidade de cidades cadastradas igual a 3:

select count(*), state.NAME from city inner join state on city.STATE_ID = state.ID 
group by state.NAME having count(*) = 3;
-- Mostrar nome dos estados que NÃO possuem quantidade de cidades cadastradas igual a 3:

select count(*), state.NAME from city inner join state on city.STATE_ID = state.ID 
group by state.NAME having not count(*) = 3; 