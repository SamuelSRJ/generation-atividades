CREATE DATABASE db_escola;
USE db_escola;

CREATE TABLE tb_alunos (
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    curso VARCHAR(50) NOT NULL,
    professor VARCHAR(50) NOT NULL,
    notaAnual DECIMAL(3,1) NOT NULL
);

INSERT INTO tb_alunos (nome, curso, professor, notaAnual) VALUES 
	("Samuel de Souza", "JavaScript", "Thiago", 10.0),
    ("Maria da Silva", "Kotlin", "Caroline", 8.5),
    ("João Ferreira", "Python", "Betania", 7.4),
    ("Thiago Faccipieri", "Java", "Ralph", 2.5),
    ("Natalia Teixeira", "Java", "Ralph", 3.5),
    ("Natalia Soares", "Ruby", "Gerusca", 8.7),
    ("Renato Barros", "Kotlin", "Caroline", 9.9),
    ("Josué Fernandes", "C#", "Gislaine", 8.6);

SELECT * FROM tb_alunos WHERE notaAnual > 7;

SELECT * FROM tb_alunos WHERE notaAnual < 7;

UPDATE tb_alunos SET curso = "CSharp" WHERE id = 8;