First, let's evaluate the `trips` table with the `SHOW COLUMNS FROM trips;` statement.

The output should be this:

```
+---------------------+-------------+------+-----+----------+----------------+
| Field               | Type        | Null | Key | Default  | Extra          |
+---------------------+-------------+------+-----+----------+----------------+
| id                  | int(8)      | NO   | PRI | NULL     | auto_increment |
| trip_datetime_start | datetime    | NO   |     | NULL     |                |
| trip_datetime_end   | datetime    | YES  |     | NULL     |                |
| trip_total_fare     | float(8,2)  | YES  |     | 0.00     |                |
+---------------------+-------------+------+-----+----------+----------------+
4 rows in set (0.00 sec)
```

|||info
### Understanding the `No database selected` 
### SQL error

In case you get an `ERROR 1046 (3D000): No database selected;` SQL error prompt, make sure you switch to the right database using the `USE db_name;` command in order for the commands we present in this unit to work properly.

|||

---

Let's understand the `FLOAT` and the `DATETIME` data types in the next section.