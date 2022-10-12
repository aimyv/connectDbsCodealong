-- 1_setup.sql
DROP TABLE IF EXISTS dogs;

CREATE TABLE dogs (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    age int NOT NULL,
    owner_id int
);