USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1,2,3
SELECT 10 + 15
SELECT 10*15
SELECT * FROM Scientists
SELECT Name,Hours FROM Projects
SELECT name FROM Scientists
ORDER BY name ASC
SELECT name FROM Scientists
ORDER BY name DESC
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') as resultado FROM Projects;
SELECT Hours FROM Projects
ORDER BY Hours DESC
LIMIT 3
SELECT DISTINCT project FROM AssignedTo
SELECT name FROM Projects
ORDER BY Hours DESC
LIMIT 1
SELECT name FROM Projects
ORDER BY Hours ASC
LIMIT 1,1
SELECT * FROM Projects
ORDER BY Hours ASC
LIMIT 5
SELECT CONCAT('Existem ', COUNT(*), ' cientistas na tabela Scientists') as Resultado FROM Scientists