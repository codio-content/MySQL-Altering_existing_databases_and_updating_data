A `EPCars` database has been created for you.

Practice the different ways in which a database table can be _udpated_ by executing the following commands: 

Use the `EPCars` database and show its tables: 

```
mysql> USE EPCars;
mysql> SHOW TABLES;
```

Display the `cars` table columns and data types:

```
mysql> SHOW COLUMNS FROM EPCars.cars;
```

Add two more columns to the `EPCars.cars` table in a multiple-line statement:

```
mysql> ALTER TABLE EPCars.cars
    -> ADD 
    -> (total_kms FLOAT(6,2) NOT NULL DEFAULT 00.00, 
    -> is_premium TINYINT(1) NOT NULL DEFAULT 0);
```

Continue in the next section.