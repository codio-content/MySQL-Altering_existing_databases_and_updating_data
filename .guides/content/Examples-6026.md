|||info
### Reset section database
If you make a mistake while editing the `EPCars` database in this set of sections or just want to reset the database back to its original state, return to this page and click the “Reset Section Database” button below.

{Reset Section Database}(node .guides/sqltests/fw-sql-reset-epcars.js)
|||
---

An `EPCars` database has been created for you.

Practice the different ways in which a database table can be updated by executing the following commands: 

Use the `EPCars` database and show its tables: 

```
mysql> USE EPCars;
mysql> SHOW TABLES;
```

Display the `cars` table columns and data types using dot syntax:

```
mysql> SHOW COLUMNS FROM EPCars.cars;
```

Add two more columns to the `EPCars.cars` table in a multiple-line statement:

```
mysql> ALTER TABLE EPCars.cars
    -> ADD 
    -> (total_kms FLOAT(6,2) NOT NULL DEFAULT 00.00, 
    -> is_premium TINYINT(1) UNSIGNED NOT NULL DEFAULT 0);
```

Continue in the next section.