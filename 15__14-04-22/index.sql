-- challenge 2

-- Adicione sua consulta SQL aqui
select clientes.id as cliente_id, clientes.nome as nome_cliente from clientes
left join pedidos on clientes.id = pedidos.cliente_id
where clientes.id between 51 and 55
order by clientes.id
limit 5;

-- challenge 4

-- Adicione sua consulta SQL aqui
select id, nome, salario from funcionarios 
where salario > (select salario from funcionarios where id=30);
