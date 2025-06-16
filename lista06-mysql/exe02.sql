CREATE DATABASE db_ecommerce;
USE db_ecommerce;

CREATE TABLE tb_produtos (
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nomeProduto VARCHAR(100) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    preco DECIMAL(9,2) NOT NULL
);

INSERT INTO tb_produtos (nomeProduto, marca, categoria, preco) VALUES 
	("iPhone 16 Pro", "Apple", "Smartphone", 6499.99),
    ("Nootbook Acer Home", "Acer", "Computadores", 4699.99),
	("Cabo HDMI 8K Ultra-fast", "ELG", "Cabos", 128.99),
    ("Galaxy S24 FE", "Samsung", "Smartphone", 5999.99),
    ("Refrigerador Elettromec 653L", "Elettromec", "Geladeiras e Refrigeradores", 34999.99),
    ("Fone de Ouvido JBL543", "JBL", "Fones de ouvido e Headsets", 359.99),
    ("Headset Sennheiser HD 450BT", "Sennheiser", "Fones de ouvido e Headsets", 1199.99),
    ("PlayStation 5", "Sony", "Videogames", 3599.98);

SELECT * FROM tb_produtos WHERE preco > 500;

SELECT * FROM tb_produtos WHERE preco < 500;

UPDATE tb_produtos SET nomeProduto = "Notebook Acer Predator 5" WHERE id = 2;