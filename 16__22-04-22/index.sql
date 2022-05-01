-- challenge 4

INSERT INTO participants VALUES ('Rodrigo',26, true); --Your code here

SELECT * FROM participants;

-- challenge 5

-- Crie sua query aqui
select p.id,p.nome,count(*) as quantidade_brinquedos  from pessoas p 
inner join brinquedos b 
on p.id=b.pessoas_id
group by p.id;