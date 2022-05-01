-- challenge 1

-- Adicione sua consulta SQL aqui
SELECT pessoas.id AS id, pessoas.nome AS nome, SUM(pedidos.quantidade) AS total_itens
FROM pessoas
INNER JOIN pedidos ON pessoas.id = pedidos.pessoas_id
GROUP BY pessoas.id 
ORDER BY total_itens DESC LIMIT 10;

-- challenge 2

-- Insira aqui a sua query
select customer.customer_id as customer_id , customer.email as email, count(payment.amount) as payments_count, 
sum(payment.amount::float) as total_amount from customer
inner join payment on customer.customer_id = payment.customer_id
group by customer.customer_id
order by total_amount desc
limit 10 ;
-- challenge 3