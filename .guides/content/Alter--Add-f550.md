You guessed right. An error would ocurr if you forget to define the data type to the new or existing table column.

Just as when we _create_ a new database table where column names must be defined with data types and constraints, the `ALTER TABLE t_name ADD column data_type();` SQL statement, designed to add columns to a table, needs to have the proper information. 

### What car is each of the drivers driving?

Let's add a `car_id` column to our `EPDriver.drivers` table. The `car_id` column won't hold a car name but an integer with a limit of 10 digits. This value must not be `NULL` either. 

```
mysql> ALTER TABLE EPDriver.drivers ADD car_id INT(10) NOT NULL;
```

Perform a `SHOW COLUMNS FROM EPDriver.drivers;` and you should see this:

```
+---------------------+--------------+------+-----+---------+----------------+
| Field               | Type         | Null | Key | Default | Extra          |
+---------------------+--------------+------+-----+---------+----------------+
| id                  | int(8)       | NO   | PRI | NULL    | auto_increment |
| name                | varchar(255) | NO   |     | NULL    |                |
| is_certified_driver | tinyint(1)   | YES  |     | NULL    |                |
| car_id              | int(10)      | NO   |     | NULL    |                |
+---------------------+--------------+------+-----+---------+----------------+
4 rows in set (0.02 sec)
```

--- 
All right! Ready for a challenge on altering tables? Go to the next section.