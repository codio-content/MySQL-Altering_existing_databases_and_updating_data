CREATE TABLE trips (
	id INT(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	trip_datetime_start DATETIME NOT NULL,
  trip_datetime_end DATETIME,
	trip_total_fare FLOAT(8,2) DEFAULT 00.00
) auto_increment = 1;