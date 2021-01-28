CREATE DATABASE empchat;
GRANT ALL PRIVILEGES ON DATABASE empchat TO empchat_user;
CREATE TABLE IF NOT EXISTS pairwise_comp (
    dialog_id int PRIMARY KEY NOT NULL,
    selection int NOT NULL
);

