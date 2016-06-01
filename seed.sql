CREATE DATABASE IF NOT EXISTS udemy_course;

USE udemy_course;

CREATE TABLE IF NOT EXISTS `udemy_course`.`hat` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(20),
  `description` VARCHAR(100)
) ENGINE = INNODB;

INSERT INTO `hat` (`name`, `description`) VALUES ('Fedora', 'A soft felt hat with a medium brim and lengthwise crease in the crown.');
INSERT INTO `hat` (`name`, `description`) VALUES ('Tuque', 'In Canada, a knitted hat, worn in winter, usually made from wool or acrylic.');
