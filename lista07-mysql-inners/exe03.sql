CREATE DATABASE IF NOT EXISTS db_farmacia_bem_estar;
USE db_farmacia_bem_estar;

CREATE TABLE IF NOT EXISTS tb_categorias (
	id INT AUTO_INCREMENT PRIMARY KEY,
    categoria VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS tb_produtos (
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    categoria_id INT NOT NULL,
    preco DECIMAL(7,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id)
);

INSERT INTO tb_categorias (categoria) VALUES
	("Remédios"),
    ("Suplementos"),
    ("Cosméticos");
    
INSERT INTO tb_produtos (nome, marca, categoria_id, preco) VALUES
	("Paracetamol 750mg", "Medley", 1, 9.90),
    ("Dorflex", "Sanofi", 1, 14.50),
    ("Amoxilina 500mg", "EMS", 1, 22.90),
    ("Polivitamínico A-Z", "Centrum", 2, 59.90),
    ("Whey Protein 900g", "Growth Supplements", 2, 89.90),
    ("Ômega 3 1000mg", "Sundown", 2, 49.50),
    ("Protetor Solar FPS 60", "La Roche-Posay", 3, 79.90),
    ("Shampoo Antiqueda", "Vichy", 3, 55.00),
    ("Creme Hidratante Corporal", "Nivea", 3, 22.90),
    ("Sabonete Facial", "Neutrogena", 3, 29.50);
    
SELECT * FROM tb_produtos WHERE preco > 50;

SELECT * FROM tb_produtos WHERE preco BETWEEN 5 AND 60;

SELECT * FROM tb_produtos WHERE nome LIKE "C%";

SELECT *
FROM tb_produtos INNER JOIN tb_categorias
ON tb_produtos.categoria_id = tb_categorias.id;

SELECT tb_produtos.id, tb_produtos.nome, tb_categorias.categoria
FROM tb_produtos INNER JOIN tb_categorias
ON tb_produtos.categoria_id = tb_categorias.id
WHERE tb_categorias.id = 3;
    

    