-- challenge 1

-- Adicione sua consulta SQL aqui

select date(criado_em) as dia, descricao, count(criado_em) as contagem from eventos
where nome = 'treinado'
group by dia, descricao
order by dia;

-- challenge 2

-- Adicione sua consulta SQL aqui

select date(criado_em) as dia, descricao, count(criado_em) as contagem from eventos
where nome = 'treinado'
group by dia, descricao
order by dia;
-- challenge 3

-- Create your SELECT statement here

select people.id, people.name, count(toys.people_id) as toy_count from people
inner join toys on people.id = toys.people_id
group by people.id;