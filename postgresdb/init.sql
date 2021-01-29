

CREATE TABLE IF NOT EXISTS pairwise_comp (
    dialog_id int NOT NULL,
    selection int NOT NULL
);

CREATE TABLE IF NOT EXISTS pairwise_emo (
    dialog_id int NOT NULL,
    selection int NOT NULL
);


CREATE TABLE IF NOT EXISTS rating_model (
    dialog_id int NOT NULL,
    emp int NOT NULL,
    rel int NOT NULL,
    flu int NOT NULL
);

CREATE TABLE IF NOT EXISTS rating_dodeca (
    dialog_id int NOT NULL,
    emp int NOT NULL,
    rel int NOT NULL,
    flu int NOT NULL
);


