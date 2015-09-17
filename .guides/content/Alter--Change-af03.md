Let's perform a `SHOW COLUMNS FROM EPDriver.drivers;` to remember what its column names and data types are.

This should be the output:

```
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(8)       | NO   | PRI | NULL    | auto_increment |
| name      | varchar(255) | NO   |     | NULL    |                |
| certified | tinyint(1)   | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
3 rows in set (0.02 sec)
```

We discovered that the `certified` column needs to be more _self-explanatory_. 

Let's update its name to `certified_driver`, leaving its data type as `TINYINT(1)` (notice the order in which the column names are written, being the second one the new column name):

```
mysql> ALTER TABLE drivers CHANGE certified certified_driver TINYINT(1);
```

And you should see this:

```
Query OK, 0 rows affected (0.12 sec)
Records: 0  Duplicates: 0  Warnings: 0
```

Can you guess what happens if you omit the data type when defining a new column name? 