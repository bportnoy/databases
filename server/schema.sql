CREATE DATABASE chat;

USE chat;

CREATE TABLE `messages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user` INT,
  `room` INT,
  `date` BIGINT,
  `text` TEXT,
  `crypto` TINYINT(1),
  PRIMARY KEY  (`id`)
);

CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255),
  PRIMARY KEY  (`id`)
);

CREATE TABLE `rooms` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255),
  PRIMARY KEY  (`id`)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

