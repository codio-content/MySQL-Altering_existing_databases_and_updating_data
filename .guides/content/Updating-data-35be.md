We know that the `trips` table `id`'s that are missing `trip_datetime_end` and `total_fare` values are `4`, `7` and `9`.

In the `mysql>` prompt, execute an `UPDATE` SQL statement to mark the trip `7` as finished. This time, let's do a __multi-line query__ (press enter after each line):

```
mysql> UPDATE trips 
    -> SET trip_datetime_end = '2015-09-15 23:15:33' 
    -> WHERE id = 7;
```

And you should see this:

```
Query OK, 1 row affected (0.02 sec)
Rows matched: 1  Changed: 1  Warnings: 0
```

Let's understand each of the `UPDATE` statement parts:

1. `UPDATE trips`
Begin the SQL update statement specifying the table name
2. `SET trip_datetime_end = '2015-09-15 23:15:33'`
The `SET` keyword gives the instruction for _setting_ new values to rows. In this case, the values are a `DATETIME` data type with the format: 'YYYY-MM-DD 00:00:00'
3. `WHERE id = 7;`
Finally, the `WHERE` clause specifies the specific row to be updated. In this case, where the `id` column equals 7

|||info
### Notice the `WHERE` clause in the SQL `UPDATE` statement
The `WHERE` clause specifies the records that should be updated. 

__By omitting the `WHERE` clause, all records will be updated.__
|||