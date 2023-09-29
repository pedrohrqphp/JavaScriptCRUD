CREATE DATABASE Steam;
USE Steam;

CREATE TABLE Jogo (
    id_jogo int auto_increment not null,
    nm_jogo varchar(50) not null,
    tipo_jogo varchar(50) not null,

    CONSTRAINT PK_Jogo PRIMARY KEY(id_jogo)
);