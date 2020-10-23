-- Truncate: elimina de forma irreversível os dados da tabela, 
-- diferente do delete numa transação, ele não armazena
-- cache das operações executadas.

-- Limpando a tabela:

delete from person;

select * from person;

-- Inserindo dados:

INSERT INTO "ANDERSON"."PERSON" VALUES ('1', 'Person01', 'person01@database.com', '4000', TO_DATE('12/11/1981', 'DD/MM/YYYY'), 'M');
INSERT INTO "ANDERSON"."PERSON" VALUES ('2', 'Person02', 'person02@database.com', '2000', TO_DATE('12/01/1982', 'DD/MM/YYYY'), 'M');
INSERT INTO "ANDERSON"."PERSON" VALUES ('3', 'Person03', 'person03@database.com', '1500', TO_DATE('12/04/1983', 'DD/MM/YYYY'), 'F');
INSERT INTO "ANDERSON"."PERSON" VALUES ('4', 'Person04', 'person04@database.com', '1000', TO_DATE('12/06/1984', 'DD/MM/YYYY'), 'M');
INSERT INTO "ANDERSON"."PERSON" VALUES ('5', 'Person05', 'person05@database.com', '1800', TO_DATE('12/09/1985', 'DD/MM/YYYY'), 'F');
INSERT INTO "ANDERSON"."PERSON" VALUES ('6', 'Person06', 'person06@database.com', '1500', TO_DATE('12/10/1986', 'DD/MM/YYYY'), 'M');
INSERT INTO "ANDERSON"."PERSON" VALUES ('7', 'Person07', 'person07@database.com', '2500', TO_DATE('12/03/1987', 'DD/MM/YYYY'), 'F');

select * from person;

-- Executando um truncate na tabela:

truncate table person;

select * from person;