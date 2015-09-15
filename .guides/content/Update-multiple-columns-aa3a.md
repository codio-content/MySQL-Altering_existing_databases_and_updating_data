It is possible to update 2 or more columns with a single `UPDATE` statement. 

Let's perform this for the row with `id`: 9, updating the `trip_datetime_end` and the `trip_total_fare` simultaneously:

In the `mysql>` prompt execute: 

```
mysql> UPDATE trips
    -> SET 
    -> trip_datetime_end = '2015-09-15 10:42:00',
    -> trip_total_fare = 60.35
    -> WHERE id = 9;
```

And you should see this: 

```
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0
```

Let's inspect our recently updated records from the `trips` table:

```
mysql> SELECT * FROM trips WHERE id = 7 OR id = 9;
```

This should be the output:

```
+----+---------------------+---------------------+-----------------+
| id | trip_datetime_start | trip_datetime_end   | trip_total_fare |
+----+---------------------+---------------------+-----------------+
|  7 | 2015-09-15 15:48:41 | 2015-09-15 23:15:33 |            0.00 |
|  9 | 2015-09-15 10:00:08 | 2015-09-15 10:42:00 |           60.35 |
+----+---------------------+---------------------+-----------------+
2 rows in set (0.00 sec)
```

---
All right! Time for a challenge on updating table records! 