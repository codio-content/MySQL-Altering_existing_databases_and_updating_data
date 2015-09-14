In order to illustrate the SQL `UPDATE` functionality, we created an `uberr` schema that represents the storage of some of the data from an app that enables users to hire private drivers.

Click on the `mysql>` prompt in the left pane and verify that the `uberr` database exists by executing the `SHOW DATABASES;` statement. 

You should see this: 

```
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| test               |
| uberr              |
+--------------------+
5 rows in set (0.00 sec)
```

Use the `uberr` schema and display its tables:

```
mysql> USE uberr;
```

```
mysql> SHOW TABLES;
```

This is the result:

```
+-----------------+ 
| Tables_in_uberr | 
+-----------------+ 
| drivers         |
| trips           |
| users           |
+-----------------+
3 rows in set (0.00 sec)
```

--- 
Let's evaluate the `table` columns' data types in the next section.