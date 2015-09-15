Let's take a closer look to the `trips` table `id`'s where the user hasn't finished the trip yet:

Execute the `SELECT * FROM trips WHERE trip_datetime_end IS NULL;` statement to accomplish this:

```
+----+---------------------+---------------------+-----------------+
| id | trip_datetime_start | trip_datetime_end   | trip_total_fare |
+----+---------------------+---------------------+-----------------+
|  4 | 2015-09-15 22:56:33 | NULL                |            0.00 |
|  7 | 2015-09-15 15:48:41 | NULL                |            0.00 |
|  9 | 2015-09-15 10:00:08 | NULL                |            0.00 |
+----+---------------------+---------------------+-----------------+
10 rows in set (0.00 sec)
```

|||info
### Selecting `NULL` values:

We learned that the `WHERE` clause let us create conditional statements using _SQL query operators_. 

However, __when looking specifically for `NULL` values__, the `SELECT column_names FROM WHERE column_name IS NULL` statement  applies. 

In conclusion, the `IS` operator is designed specifically for matching `NULL` values because they are not strings nor other data types but `NULL`.

|||

--- 
Some users have finished their trips, let's update the `trips` table rows in the next section.