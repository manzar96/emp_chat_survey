CREATE DATABASE empchat;

CREATE TABLE model_ratings (
    dialog_id INT PRIMARY KEY NOT NULL,
    emp int NOT NULL,
    rel int NOT NULL,
    flu int NOT NULL
);

CREATE TABLE dodeca_ratings (
    dialog_id int PRIMARY KEY NOT NULL,
    emp int NOT NULL,
    rel int NOT NULL,
    flu int NOT NULL
);


CREATE TABLE pairwise_comp (
    dialog_id int PRIMARY KEY NOT NULL,
    model boolean NOT NULL,
    dodeca boolean NOT NULL
);


CREATE TABLE pairwise_emo (
    dialog_id int PRIMARY KEY NOT NULL,
    model boolean NOT NULL,
    dodeca boolean NOT NULL
);
