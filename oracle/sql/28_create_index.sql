-- Index é utilizado para otimização de consultas.

-- Criando INDEX:
create unique index idx_person on person (name, email);

-- Destruindo INDEX:
drop index idx_person;
