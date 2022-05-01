-- challenge 3

-- Adicione sua consulta SQL aqui
select f.id, f.nome, f.area_atuacao, f.salario from funcionarios f
where salario > (select avg(salario) from funcionarios b  where b.area_atuacao = f.area_atuacao);

-- challenge 4

-- Adicione sua consulta SQL aqui
select * from funcionarios a 
where a.salario = (select min(salario) from funcionarios b where a.area_atuacao = b.area_atuacao);