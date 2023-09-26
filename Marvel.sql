CREATE DATABASE Marvel;
USE Marvel;

CREATE TABLE Personagem(
	id_personagem int not null auto_increment,
    nm_personagem varchar(50) not null,
    tipo_personagem char(5) not null,
    
    CONSTRAINT PK_Personagem PRIMARY KEY(id_personagem)
);

INSERT INTO Personagem VALUES
	(1, 'Homem de Ferro', 'Herói'),
    (2, 'Thanos', 'Vilão')
;