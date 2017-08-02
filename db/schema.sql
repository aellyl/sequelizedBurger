CREATE DATABASE burgers_db ;
USE burgers_db;

CREATE TABLE `burgers_db`.`burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(45) NULL,
  `devoured` TINYINT NULL,
  `date` TIMESTAMP NULL,
  PRIMARY KEY (`id`));

  ALTER TABLE `burgers_db`.`burgers` 
CHANGE COLUMN `date` `date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ;

ALTER TABLE `burgers_db`.`burgers` 
CHANGE COLUMN `devoured` `devoured` TINYINT NULL DEFAULT 0 ;