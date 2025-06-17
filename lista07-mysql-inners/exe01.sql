CREATE DATABASE IF NOT EXISTS db_generation_game_online;
USE db_generation_game_online;

DROP DATABASE db_generation_game_online;

CREATE TABLE IF NOT EXISTS tb_classes (
	id INT AUTO_INCREMENT PRIMARY KEY,
    class_name VARCHAR(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS tb_personagens (
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    hp INT NOT NULL,
    ptsAtk INT NOT NULL,
    ptsDef INT NOT NULL,
    class_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (class_id) REFERENCES tb_classes(id)
);

INSERT INTO tb_classes (class_name) VALUES
	("Knight"),     #1
    ("Mercenary"),	#2
    ("Warrior"),	#3
    ("Thief"),		#4
    ("Assassin"),	#5
    ("Sorcerer"),	#6
    ("Pyromancer"),	#7
    ("Cleric"),		#8
    ("Herald"),		#9
    ("Deprived");	#10
    
INSERT INTO tb_personagens 
	(name, hp, ptsAtk, ptsDef, class_id) 
VALUES
	("Gerald de Rivia", 5000, 3500, 3000, 1),
	("Kratos", 9000, 7000, 4500, 3),
	("Ezio Auditore", 4000, 4500, 2000, 5),
	("Gandalf", 4500, 6000, 3500, 6),
	("Deadpool", 6000, 5000, 3000, 2),
	("Aragorn", 5200, 3700, 3400, 1),
	("Ciri", 4700, 4300, 2800, 2),
	("Guts", 8000, 6500, 4200, 3),
	("Garrett", 3600, 2500, 1800, 4),
	("John Wick", 4000, 5200, 2500, 5),
	("Doctor Strange", 4300, 6200, 3000, 6),
	("Azula", 4100, 4800, 2300, 7),
	("Anduin Wrynn", 4500, 3500, 4000, 8),
	("Silver Surfer", 7000, 7500, 5000, 9),
	("Smeagol", 1800, 900, 700, 10),
	("Conan, o Bárbaro", 6500, 5800, 3000, 3),
	("Yennefer", 4200, 5600, 2600, 6),
	("Lupin III", 3200, 2800, 1600, 4),
	("Roy Mustang", 3900, 5100, 2200, 7),
	("Heimdall", 5800, 4300, 4400, 9),
	("The Nameless One", 5000, 4500, 4500, 10);
    
SELECT * FROM tb_personagens WHERE ptsAtk > 2000;

SELECT * FROM tb_personagens WHERE ptsDef BETWEEN 1000 AND 2000;

SELECT * FROM tb_personagens WHERE name LIKE "C%";

SELECT tb_personagens.id, tb_personagens.name, tb_classes.class_name AS "class"
FROM tb_personagens INNER JOIN tb_classes
ON tb_personagens.class_id = tb_classes.id;

SELECT tb_personagens.id, tb_personagens.name, tb_classes.class_name AS "class"
FROM tb_personagens INNER JOIN tb_classes
ON tb_personagens.class_id = tb_classes.id
WHERE tb_classes.class_name = "Warrior";
