CREATE TABLE IF NOT EXISTS `applicationform_settings`(
	 		`idx` INT NOT NULL AUTO_INCREMENT, 
			 `seq` INT NOT NULL,
			 `title` VARCHAR(50) NOT NULL,
		PRIMARY KEY (`idx`) ); 


CREATE TABLE IF NOT EXISTS `applicationform_contents`(
			 `idx` INT NOT NULL AUTO_INCREMENT, 
			 `seq` INT NOT NULL,
			 `position` VARCHAR(40) NOT NULL,
			 `salary` VARCHAR(20) NOT NULL,
			 `name` VARCHAR(40) NOT NULL,
			 `address` TEXT NOT NULL,
			 `contactnum` VARCHAR(20) NOT NULL,
			 `email` VARCHAR(20) NOT NULL,
			 `yr_exp` INT NOT NULL,
			 `des_car` TEXT NOT NULL,
			 `date_reg` BIGINT NOT NULL,
	PRIMARY KEY (`idx`) ); 
