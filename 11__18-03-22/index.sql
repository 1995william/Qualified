-- challenge 2

--Your code here
SELECT name, age 
FROM users 
WHERE age >= 18;

-- challenge 3

--Your Code Here
SELECT name, country 
FROM travelers 
WHERE country <> 'Canada' AND country <> 'USA' AND country <> 'Mexico';
-- challenge 4

-- Crie sua query aqui
SELECT idade, COUNT(*) AS total_de_pessoas
FROM pessoas
GROUP BY idade
HAVING COUNT(*) >=10;