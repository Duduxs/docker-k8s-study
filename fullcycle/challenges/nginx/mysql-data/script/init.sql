CREATE DATABASE IF NOT EXISTS node;
USE node;
CREATE TABLE IF NOT EXISTS people(
	id int auto_increment primary key,
	name varchar(255)
);
