CREATE DATABASE db_empresa;
USE db_empresa;

CREATE TABLE tb_colaboradores (
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    departamento VARCHAR(20) NOT NULL,
    salario DECIMAL(9,2) NOT NULL
);

INSERT INTO tb_colaboradores (nome, email, departamento, salario) VALUES 
	("Samuel de Souza", "samuel.souza@empresa.com.br", "desenvolvimento", 8000.00),
    ("Maria da Silva", "maria.silva@empresa.com.br", "rh", 8000.00),
    ("João Ferreira", "joao.ferreira@empresa.com.br", "financeiro", 9000.00),
    ("Thiago Faccipieri", "thiago.faccipieri@empresa.com.br", "desenvolvimento", 15000.00),
    ("Natalia Teixeira", "natalia.teixeira@empresa.com.br", "desenvolvimento", 9000.00),
    ("Natalia Soares", "natalia.soares@empresa.com.br", "financeiro", 7500.00),
    ("Renato Barros", "renato.barros@empresa.com.br", "rh", 4500.00),
    ("Josué Fernandes", "josue.fernandes@empresa.com.br", "compras", 1900.00),
    ("Fabio Almeida", "fabio.almeida@empresa.com.br", "desenvolvimento", 6000.00),
    ("Natalia Trindade", "natalia.trindade@empresa.com.br", "rh", 1600.00),
    ("Larissa Barros", "larissa.barros@empresa.com.br", "compras", 6500.00),
    ("Larissa Barbosa", "larissa.barbosa@empresa.com.br", "desenvolvimento", 6300.00);

SELECT * FROM tb_colaboradores WHERE salario > 2000;

SELECT * FROM tb_colaboradores WHERE salario < 2000;

UPDATE tb_colaboradores SET salario = 8400.00 WHERE id = 1;