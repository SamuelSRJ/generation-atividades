CREATE DATABASE IF NOT EXISTS db_pizzaria_legal;
USE db_pizzaria_legal;

CREATE TABLE IF NOT EXISTS tb_categorias (
	id INT AUTO_INCREMENT PRIMARY KEY,
    categoria VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS tb_pizzas (
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    qtd_pedacos INT NOT NULL,
    categoria_id INT NOT NULL,
    preco DECIMAL(5,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id)
);

INSERT INTO tb_categorias (categoria) VALUES
	("Salgada"),
    ("Doce"),
    ("Mista");
    
INSERT INTO tb_pizzas (nome, qtd_pedacos, categoria_id, preco) VALUES
    ("Calabresa", 8, 1, 69.90),
    ("Frango com Catupiry", 8, 1, 74.90),
    ("Portuguesa", 8, 1, 92.50),
    ("Margherita", 6, 1, 55.00),
    ("Quatro Queijos", 8, 1, 47.00),
    ("Chocolate com Morango", 8, 2, 68.90),
    ("Prestígio", 6, 2, 66.50),
    ("Romeu e Julieta", 6, 2, 54.90),
    ("Frango com Chocolate", 8, 3, 41.50),
    ("Banana com Bacon", 8, 3, 39.90);
    
SELECT * FROM tb_pizzas WHERE preco > 45;

SELECT * FROM tb_pizzas WHERE preco BETWEEN 50 AND 100;

SELECT * FROM tb_pizzas WHERE nome LIKE "M%";

SELECT *
FROM tb_pizzas INNER JOIN tb_categorias
ON tb_pizzas.categoria_id = tb_categorias.id;

SELECT tb_pizzas.nome, tb_categorias.categoria
FROM tb_pizzas INNER JOIN tb_categorias
ON tb_pizzas.categoria_id = tb_categorias.id
WHERE tb_categorias.id = 2;