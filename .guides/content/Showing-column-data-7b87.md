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
6 rows in set (0.00 sec)
```

|||info
### Remember to `USE` databases
Whenever you leave the unit and come back again later, the terminal is going to open a new `mysql>` prompt automatically. 

Just in case you get an `ERROR 1046 (3D000): No database selected;` error prompt, make sure you switch to the right database using the `USE db_name;` command in order for the commands we present in this unit to work properly.

|||

---

Let's understand the `FLOAT` and the `DATETIME` data types in the next section.